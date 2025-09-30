const express = require('express')
const app = express()
const PORT = 5000
const connectDB = require('./db')
require('dotenv').config({
    path:'./.env'
})
const url = process.env.MONGODB_URL
const photgrapher = require('./Controllers/PhotographerRouter')
const review = require('./Controllers/ReviewRouter')
const Booking = require('./Controllers/BookingRouter')
const project = require('./Controllers/ProjectRouter')
const User = require('./Controllers/UserRouter')

app.use(express.json())
app.use("/",photgrapher)
app.use("/",review)
app.use("/",Booking)
app.use("/",project)
app.use("/",User)


const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log('MongoDB connected successfully');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

startServer();
