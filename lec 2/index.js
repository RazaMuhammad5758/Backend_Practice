require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/facebook", (req, res) => {
    res.send("Raza Muhammad")
})

app.get("/youtube", (req,res)=>{
    res.send("<h2>Welcome to youtube</h2>")
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${process.env.PORT || port}`)
})