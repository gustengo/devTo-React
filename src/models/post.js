const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({     // añadir la abstraccion de un post en dev.to
    writerImg: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 30
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    hashtag:{
        type:String,
        required: true,
    },
    reactions: {
        type: Number,
        required: true
    },
    comments: {
        type: Number,
        required: true
    },
    readTime: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }

})

const model = mongoose.model('posts', postSchema)

module.exports = model