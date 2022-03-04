const Writer = require('../models/writers')


function getAll () {
    return Writer.find({})
}


async function signUp (dataWriter) {

    const {email, password, name} = dataWriter

    const writerFound = await Writer.findOne({email: email})

    if(writerFound) throw new Error('User already exists')
    
    return Writer.create({name, email, password})
}


module.exports = {
    getAll,
    signUp
}