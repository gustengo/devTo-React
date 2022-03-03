const express = require('express')
const writersRouter = require('./routers/writers')

const server = express()

server.use(express.json())

server.use('/writers', writersRouter)

module.exports = server