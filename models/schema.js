const mongoose = require("mongoose")

const nameSchema = new mongoose.Schema({
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
}, { collection: 'accounts'})

module.exports = mongoose.model('accounts', nameSchema)