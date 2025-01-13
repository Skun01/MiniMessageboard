const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/indexRoute')


const app = express();

// use this to parse the form data into req.body
app.use(express.urlencoded({ extended: true }));

//template engine declare
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// middleware func
app.use('/', indexRouter)
// app.get('/', (req, res)=>{
//   res.render('index', {title: "Mini Messageboard", messages: messages})
// })

const PORT = 3000;

app.listen(PORT, ()=>{
  console.log('my server is running...');
})