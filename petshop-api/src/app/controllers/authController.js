const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const mailer = require('../../modules/mailer')

const authConfig = require('../../config/auth.json')

const Customer = require('../models/customer')
const Vet = require('../models/vet')

const router = express.Router()

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  })
}

function checkUserKind(body) {
  if (body.kind === 'customer')
    return Customer
  
  if (body.kind === 'vet')
    return Vet
}

const verifyKind = async (req, res, User) => {
  const { kind, registry, email } = req.body
  let user = null

  if (!kind)
      return res.status(400).send({ error: 'Kind not informed' })

  switch (kind) {
    case 'vet':
      user = await User.findOne({ registry }).select('+password')
      break;
    case 'customer':
      user = await User.findOne({ email }).select('+password')
      break;
    default:
      user = { error: 'Invalid kind informed' }
  }

  return user
}

router.post('/register', async (req, res) => {
  try {
    const User = checkUserKind(req.body)

    const { email, cpf, registry, crmv } = req.body
    const isVet = req.body.kind === 'vet'
    let orParams = [{ email }, { cpf }]

    if (isVet)
      orParams = [...orParams, { registry }, { crmv }]

    const userExists = await User.findOne({ $or: orParams })
    const propertyAlreadyTaken = [];

    if (userExists) {
      const { 
        email: ueEmail, 
        cpf: ueCPF, 
        registry: ueRegistry, 
        crmv: ueCRMV
      } = userExists;

      ueEmail === email && propertyAlreadyTaken.push("Email");
      ueCPF === cpf && propertyAlreadyTaken.push("CPF");

      if (isVet) {
        ueRegistry === registry && propertyAlreadyTaken.push("Registry");
        ueCRMV === crmv && propertyAlreadyTaken.push("CRMV");
      }
    }

    if (propertyAlreadyTaken.length > 0)
      return res
        .status(409)
        .send({ 
          error: `Properties are already registered: ${propertyAlreadyTaken.join(", ")}` 
         });

    const user = await User.create(req.body)

    user.password = undefined

    return res.send({
      user,
      token: generateToken({ id: user.id }),
    })
  } catch (err) {
    return res.status(400).send({ "error": "Registration failed" })
  }
})

router.post('/authenticate', async (req, res) => {
  const User = checkUserKind(req.body)
  const password = req.body.password

  const user = await verifyKind(req, res, User)

  if (user.error)
    return res.status(400).send({ error: user.error })
 
  if (!user)
    return res.status(400).send({ error: 'User not found' })

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: 'Invalid password' })

  user.password = undefined

  res.send({
    user,
    token: generateToken({ id: user.id }),
  })
})

router.post('/forgot_password', async (req, res) => {
  try {
    const User = checkUserKind(req.body)

    const user = await verifyKind(req, res, User)

    if (user.error)
      return res.status(400).send({ error: user.error })

    if (!user)
      return res.status(400).send({ error: 'User not found' })

    const token = crypto.randomBytes(20).toString('hex')

    const now = new Date()
    now.setHours(now.getHours() + 1)

    await User.findByIdAndUpdate(user.id, {
      $set: {
        passwordResetToken: token,
        passwordResetExpires: now,
      },
    })

    mailer.sendMail(
      {
        to: req.body.email,
        from: 'pichus@petshop.com',
        template: 'auth/forgot_password',
        context: { token },
      },
      err => {
        if (err)
          return res.status(400).send({ error: 'Cannot send forgot password email' })

        return res.send()
      },
    )
  } catch (err) {
    res.status(400).send({ error: 'Error on forgot password, try again' })
  }
})

router.post('/reset_password', async (req, res) => {
  const { User, login } = checkUserKind(req.body)
  const { token, password } = req.body

  try {
    const user = await User.findOne({ login }).select(
      '+passwordResetToken passwordResetExpires',
    )

    if (!user)
      return res.status(400).send({ error: 'User not found' })

    if (token !== user.passwordResetToken)
      return res.status(400).send({ error: 'Token invalid' })

    const now = new Date()

    if (now > user.passwordResetExpires)
      return res.status(400).send({ error: 'Token expired, generate a new one' })

    user.password = password

    await user.save()

    res.send()
  } catch (err) {
    res.status(400).send({ error: 'Cannot reset password, try again' })
  }
})

module.exports = app => app.use('/auth', router)
