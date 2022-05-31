const express = require('express')
const app = express()
const PORT = 3000

//set up root route and send response
app.get('/',(req,res) => {
    res.send('Welcome to the Pokemon App!')
})

//set up port
app.listen(PORT,()=>{
    console.log(`PORT ${PORT} is listening`)
})