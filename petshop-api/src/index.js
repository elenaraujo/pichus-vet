const express = require('express')
const PORT = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./app/controllers/index')(app)

app.listen(PORT, () => {
  console.log(` \n ✨ API executando em http://localhost:${PORT} ✨
  
  `)
})
