

const Post = require('../models/post')

function getAll() {
   return Post.find({}) 
}

function create(dataPost) {
    
    const {name, lastName, age, gender} = dataWriter
    return Post.create(dataPost)  
}


module.exports = {
    getAll,
    create
}