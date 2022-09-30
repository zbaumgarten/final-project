const mongoose = require('mongoose')

const pastrySchema = new mongoose.Schema({
    pastry: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    originCountry: {
        type: String,
        default: "Unkown"
    },
    history: {
        type: String,
        default: "Unkown"
    },
    originYear: {
        type: Number,
        default: "Unkown"
    },
    recipe: {
        type: String,
        required: True
    }
})

module.exports = mongoose.model('Pastry', pastrySchema)