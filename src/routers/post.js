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

module.exports = router