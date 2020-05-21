const express = require('express');
const router = express.Router();

const chatController = require('../controllers/chat_controller');

console.log('chat system');
router.post('/create',chatController.create);

module.exports = router;