const express = require('express')
const app = express()
const PORT = 3000
// Set up your 'database' so that it can be exported to your server.js and then be required by your server.js
const data = require('./models/pokemon')
// Set this 'database' to a variable called pokemon in your server.js file
const pokemon = data
//set up root route and send response
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
// Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser
app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

//set up port
app.listen(PORT, () => {
    console.log(`PORT ${PORT} is listening`)
})