const express = require('express')
const useCasesWriters = require('../useCases/writers')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allWriters = await useCasesWriters.getAll()

        response.json({
            success: true,
            message: 'All writers',
            data: {
                writers: allWriters
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all writers',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const writerToCreate = request.body

        const writerCreated = await useCasesWriters.create(writerToCreate)

        response.json({
            success: true,
            message: 'Writer created',
            data: {
                koder: writerCreated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create a writer',
            error: error.message
        })
    }
})

module.exports = router