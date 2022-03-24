const Post = require('../models/post');


 async function validation(request, response, next) {
     try {
         const idPost = request.params.id;
         const post = await Post.findById(idPost)
         
         req.idAuthor = post
         next()
         
     } catch (error) {
         console.log(error);
     }
}

module.exports = validation;