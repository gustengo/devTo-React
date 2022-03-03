const mongoose = require('mongoose')

const writerSchema = new mongoose.Schema({
    nickName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100
    },

}, {
    timestamps: true
})


const model = mongoose.model('writer', writerSchema)

module.exports = model