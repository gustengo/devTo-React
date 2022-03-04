

const Writer = require('../models/writers')

function getAll() {
   return Writer.find({}) 
}

function create(dataWriter) {
    
    const {name, lastName, age, gender} = dataWriter 
    return Writer.create({nickName, age}) 
}


module.exports = {
    getAll,
    create
}