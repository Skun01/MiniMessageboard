const {Router} = require('express');
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
indexRouter.get('/', (req, res)=>{
  res.render('index', {title: "Mini Messageboard", messages: messages})
})

indexRouter.get('/new', (req, res)=>{
  res.render('myForm', {title: 'New message'})
})

indexRouter.post('/new', (req, res)=>{
  const {messageText, messageUser} = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  // use this to redirect to default page
  res.redirect('/');
})

module.exports = indexRouter;