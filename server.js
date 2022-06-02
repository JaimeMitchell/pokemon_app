const express = require('express')
const app = express()
const PORT = 3000
app.use((req, res, next) => {
    console.log('Middleware running')
    next() // go to the next middleware or to the response
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set up your 'database' so that it can be exported to your server.js and then be required by your server.js
// Set this 'database' to a variable called pokemon in your server.js file
const pokemon = require('./models/pokemon')

//set up root route and send response
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

// Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser
app.get('/pokemon', (req, res) => {
    // Instead of displaying json at your /pokemon route, you should serve the Index.ejs file you created that will display your pokemon. Change your /pokemon route to res.render your Index.ejs file.
    res.render('index', { data: pokemon })
})
// Inside your server.js, add a new get route /pokemon/:id, That will res.send(req.params.id);
app.get('/pokemon/:id', (req, res) => {

    res.render('show', { data: pokemon[req.params.id] })
})

//set up port
app.listen(PORT, () => {
    console.log(`PORT ${PORT} is listening`)
})