const mongoose = require('../../database')
const bcrypt = require('bcryptjs')

const CustomerSchema = new mongoose.Schema({
  kind: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  },
  birthDate: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

CustomerSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer
