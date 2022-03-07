const jwt = require('../lib/jwt')

function auth(request, response, next){
    try {
        const {authorization: token} = request.headers;
        console.log('token:', token)

        const isValidToken = jwt.verify(token);
        console.log('token: ', token);
        console.log('isValidToken: ', isValidToken);

        if(!isValidToken) throw new Error('Writer Not authorized :(');
        next();

    } catch (error) {
        response.status(401);
        response.json({
            success: false,
            message: "Writer not authorized",
            error: error.message

        })
    }
}

module.exports = auth;
