const Chat = require('../models/chats');

module.exports.create = async function(req,res){
    try {
        console.log('chat added');
        console.log(req.body.content);
        let chat = await Chat.create({
            content: req.body.content
        });
        return res.redirect('back');
    } catch (err) {
        console.log('error',err);
        return;
    }
}