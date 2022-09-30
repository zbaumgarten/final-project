const mongoose = require('mongoose')

const pastrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    
    
})