const mongoose = require('mongoose')


const DB_USER = 'FTorresAmaya'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'cluster0.6cua9.mongodb.net'
const DB_NAME = 'retoBackend'

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () {
    return mongoose.connect(URL) 
}

module.exports = connect