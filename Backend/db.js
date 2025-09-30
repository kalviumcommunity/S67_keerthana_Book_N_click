// const mongoose = require('mongoose');

// const connectDB = async (url) => {
//     try {
//         console.log('Trying to connect to MongoDB at:', url);
//         await mongoose.connect(url); // no deprecated options
//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error('Database connection failed:', error.message);
//         process.exit(1); // stops the server if DB fails
//     }
// };

// module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        console.log('Trying to connect to MongoDB at:', url);
        await mongoose.connect(url);
        console.log('✅ MongoDB connected successfully');
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;




