const db = require('../db/queries');
async function getAllMessagesGet(req, res) {
    const messages = await db.getAllMessages();
    res.render(
        'index',
        {
            title: 'Mini Messageboard',
            messages: messages
        }
    )
}

async function insertMessageGet(req, res){
    res.render('myForm', {title: 'New message'})
}

async function insertMessagePost(req, res){
    const {messageText, messageUser} = req.body;
    await db.insertMessage(messageText, messageUser, new Date());
    res.redirect('/');
}

async function deleteMessagePost(req, res){
    await db.deleteMessage(req.params.id)
    res.redirect('/');
}

module.exports = {
    getAllMessagesGet,
    insertMessagePost,
    insertMessageGet,
    deleteMessagePost,
}