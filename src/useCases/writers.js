const Writer = require('../models/writers')


function getAll () {
    return Writer.find({})
}


async function signUp (dataWriter) {

    const {email, password, name} = dataWriter

    const writerFound = await Writer.findOne({email: email})

    if(writerFound) throw new Error('User already exists')
    
    const passwordEncrypted = await bcrypt.hash(password)

    return Writer.create({name, email, password: passwordEncrypted})
}

function login(email, password){
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
    login
}