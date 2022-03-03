const server = require ('./src/server')
const dbConnect = require ('./src/server')

dbConnect()
    .then(() => {
        console.log('Database connected :D')
        server.listen(8080, () => {
            console.log('Server running on port 8080')
        })
    })
    .catch((error) => {
        console.log('Error: ', error)
    })
    