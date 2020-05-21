const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    content: {
        type: String
    }
},{
    timestamps: new Date()
});

const Chat = mongoose.model('Chat',chatSchema);

module.exports = Chat;