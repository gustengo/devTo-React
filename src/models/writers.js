const mongoose = require('mongoose')

const writerSchema = new mongoose.Schema({ //Agregar campos de writers
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    joinDate: {
        type: Date,
        required: true,
    },
    biography: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 150,
        trim: true
    },
    nationality: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
        trim: true
    },     //añadir email y password para hacer login y encriptacion dcrypt
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true
})


const model = mongoose.model('writers', writerSchema)

module.exports = model