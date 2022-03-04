const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({ //Agregar los campos del post
    writer: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 30
    },
    title: {
        type: String,
        required: true,
    }
})

const model = mongoose.model('users', userSchema)

module.exports = model