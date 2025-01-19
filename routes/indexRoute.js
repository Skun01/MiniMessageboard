const {Router} = require('express');
const messageController = require('../controllers/messageController');
const indexRouter = Router();

//here is the data
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// router 
indexRouter.get('/', messageController.getAllMessagesGet);
indexRouter.get('/new', messageController.insertMessageGet)
indexRouter.post('/new', messageController.insertMessagePost);
indexRouter.post('/delete/:id', messageController.deleteMessagePost);
module.exports = indexRouter;