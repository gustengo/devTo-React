const Writer = require('../models/writers')
const bcrypt = require('../lib/bcrypt');
const jwt = require('../lib/jwt');

function getAll() {
    return Writer.find({}) 
 }
 
 async function create(dataWriter) {
     const {name, joinDate, biography, nationality, email, password} = dataWriter
     const userFound = await Writer.findOne({email})
     if (userFound) throw new Error ("Ya existe un usuario con este correo")
     const passwordEncrypted = await bcrypt.hash(password)
     return Writer.create({...dataWriter, password:passwordEncrypted})  
 }
 
 function updateData(idWriter, dataToUpdate){
     return Writer.findByIdAndUpdate(idWriter, dataToUpdate, {new: true})
 }
 
 function deleteById(idWriter) {
     return Writer.findByIdAndDelete(idWriter)
 }

 function getById(idWriter){
     return Writer.findById(idWriter)
 }
 
 async function signUp (dataWriter) {

    const {email, password, name} = dataWriter

    const writerFound = await Writer.findOne({email: email})

    if(writerFound) throw new Error('Writer already exists')
    
    const passwordEncrypted = await bcrypt.hash(password)

    return Writer.create({name, email, password: passwordEncrypted})
}

async function login(email, password){
    const writerFound = await Writer.findOne({email})
    
    if (!writerFound) throw new Error ('Invalid Credentials')

    const isValidPassword = await bcrypt.compare(password, writerFound.password)

    if(!isValidPassword) throw Error('Invalid Credentials *')
  
    //regresa token
    return jwt.sign({id: writerFound._id})
}

module.exports = {
    getAll,
    signUp,
    login,
    getAll,
    create,
    updateData,
    deleteById,
    getById
}