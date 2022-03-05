const express = require('express')
const postRouter = require('./routers/post')
// const writersRouter = require('./routers/writers')

const server = express()

server.use(express.json())

// server.use('/writers', writersRouter)

server.use('/posts', postRouter)

module.exports = server