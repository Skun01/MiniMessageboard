const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/indexRoute')
require('dotenv').config();

const app = express();

// use this to parse the form data into req.body
app.use(express.urlencoded({ extended: true }));

// Need this to serving static assets
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath))

//template engine declare
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// middleware func
app.use('/', indexRouter)

const PORT = 8080;

app.listen(PORT, ()=>{
  console.log('my server is running...');
})