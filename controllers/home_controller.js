
const Chat = require('../models/chats');

module.exports.home = async function(req,res){

    try {
        let all_chats = await Chat.find({})
        .sort('createdAt');
        return res.render('home',{
            title: 'Covideo',
            allchats: all_chats
        });
    } catch (err) {
        console.log('error',err);
        return;
    }
    
}