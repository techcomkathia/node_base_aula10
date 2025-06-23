//use o express para criar um servidor web
const express = require('express')
const app = express()

//middleware de recebimento de json
app.use(express.json())// permite que o express compreenda o body da requisição no formato json




module.exports = app

