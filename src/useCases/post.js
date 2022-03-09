const Post = require('../models/post')

function getAll() {
   return Post.find({}) 
}

function create(dataPost) {
    const {writerImg, writer, date, title, hashtag, reactions, comments, readTime} = dataPost
    return Post.create(dataPost)  
}

function updateData(idPost, dataToUpdate){
    return Post.findByIdAndUpdate(idPost, dataToUpdate, {new: true} ) 
}

function deleteById(idPost) {
    return Post.findByIdAndDelete(idPost)
}

function getDetails(idPost){
    return Post.findById(idPost)
}

module.exports = {
    getAll,
    create,
    updateData,
    deleteById,
    getDetails
}