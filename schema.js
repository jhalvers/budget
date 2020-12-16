const mongoose = require("mongoose")

const nameSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    }
}, { collection: 'users'})

module.exports = mongoose.model('users', nameSchema)