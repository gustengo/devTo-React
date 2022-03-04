const User = require('../models/post')


function getAll () {
    return User.find({})
}



async function signUp (dataPost) {

    const {email, password, name} = dataPost

    const postFound = await User.findOne({email: email})

    if(postFound) throw new Error('Post already exists')
    
    return Post.create({name, email, password})
}


module.exports = {
    getAll,
    signUp
}