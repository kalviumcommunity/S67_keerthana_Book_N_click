const express = require('express')
const app = express()
const port = 5000
const connectDB = require('./db')
require('dotenv').config({
    path:'./.env'
})
const url = process.env.url
const photgrapher = require('./Controllers/PhotographerRouter')

app.use(express.json())
app.use("/",photgrapher)

app.listen(port,async(req,res)=>{
    try{
        await connectDB(url)
    
    console.log(`server is running in ${port}`)
    }catch(err){
        console.error(err);
    }
})