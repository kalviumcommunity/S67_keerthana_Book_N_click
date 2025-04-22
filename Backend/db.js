const mongoose = require('mongoose')

const connectDB = async(url) =>{
    try{
        await mongoose.connect(url)
    console.log('Database connected successfully')
    }catch(error){
        console.error('Database connection failed',error.message)
    }
}

module.exports = connectDB;