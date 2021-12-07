const express = require('express')
const cors = require('cors')
const cookie_parser = require('cookie-parser')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookie_parser())
app.use(cors())

const start = async () => {
    try{
        app.listen( PORT, () => console.log(`Server started on port ${PORT}`))
    }catch(e){
        console.log("Error")
    }
}

start()