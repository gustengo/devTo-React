const Post = require('../models/post')

function getAll() {
   return Post.find({}) 
}

function create(dataPost) {
    const {writerImg, writer, date, title, hashtag, reactions, comments, readTime} = dataPost
    return Post.create(dataPost)  
}

function updateData(idPost, dataToUpdate){
    return Post.findByIdAndUpdate(idPost, dataToUpdate)
}

function deleteById(idPost) {
    return Post.findByIdAndDelete(idPost)
}

module.exports = {
    getAll,
    create,
    updateData,
    deleteById
}