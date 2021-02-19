const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Middleware
// app.use('/posts', () => {
//   console.log('Hello, middleware running');
// });

//Import Routes
const postsRoute = require('./routes/posts');

//middleware
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
  res.send('we are on home');
});

// app.get('/posts', (req, res) => {
//   res.send('we are on posts');
// });

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to DB')
);

app.listen(3000);

// call from web after cors:
// fetch('http://localhost:3000/posts/')
// .then(response => {
//   return response.json();
// }).then (data => {
//   console.log(data)
// });
