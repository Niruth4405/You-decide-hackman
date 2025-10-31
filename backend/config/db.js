const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const ConnectionString = async () => {
    const uri = process.env.CONNECTION_STRING;

    if (!uri) {
        console.log('Error: MONGODB_URL is not defined in environment variables');
        return;
    }

    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
};

module.exports = ConnectionString;
