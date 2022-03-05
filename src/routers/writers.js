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

router.patch('/:id', async (request, response) => {
    try{
    const idWriter = request.params.id;
    const dataToUpdate = request.body
    const writer = await useCasesWriters.updateData(idWriter, dataToUpdate, {new: true}) // Esto es lo que vamos a actualizar, 
    if (!writer) throw new Error("Writter not found");
    response.json({
      succes: true,
      data: {
        writer: writer,
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
    try { const idWriter =  request.params.id
         const deleteWriter = await useCasesWriters.deleteById(idWriter)
         response.json({
             success: true,
             message:'Writter Deleted',
             data: {writer: deleteWriter}
         })
    } catch (error) { //Preguntar a Fer manejo de null como resultado de búsqueda
        response.status(400)
        response.json({
            success: false,
            message: 'Error id Writter',
            error: error.message
        })
    }
})

module.exports = router