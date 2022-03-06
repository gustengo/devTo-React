const express = require('express')
const cors = require('cors')

const postRouter = require('./routers/post')
const writersRouter = require('./routers/writers')
// const writersRouter = require('./routers/writers')

const server = express()

// middlewares
server.use(cors());
server.use(express.json());

// server.use('/writers', writersRouter)

server.use('/posts', postRouter)
server.use('/writers', writersRouter)

module.exports = server