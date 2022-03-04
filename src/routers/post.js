const express = require('express')
const useCasesPost = require('../useCases/post')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allPost = await useCasesPost.getAll()

        response.json({
            success: true,
            message: 'All post',
            data: {
                writers: allPost
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all post',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const postToCreate = request.body

        const postCreated = await useCasesPost.create(postToCreate)

        response.json({
            success: true,
            message: 'Post created',
            data: {
                koder: postCreated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create a post',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try{
    const idPost = request.params.id;
    const dataToUpdate = request.body
    const post = await useCasesPost.updateData(idPost, dataToUpdate, {new: true}) // Esto es lo que vamos a actualizar, 
    if (!post) throw new Error("koder not found");
    response.json({
      succes: true,
      data: {
        post: post,
      },
    });
  } catch (error) {
    response.status(404);
    response.json({
      succes: false,
      message: error.message,
    })
  }
})

router.delete('/:id', async(request, response) => {
    try { const idPost =  request.params.id
         const deletePost = await useCasesPost.deleteById(idPost)
         response.json({
             success: true,
             message:'Post Deleted',
             data: {post: deletePost}
         })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error id Post',
            error: error.message
        })
    }
})

module.exports = router
