const mongoose = require("mongoose")

const configureSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    budgetName: {
        type: String,
        trim: true,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    }
}, { collection: 'config'})

module.exports = mongoose.model('config', configureSchema)