'use strict'

// Node Modules
// dependencies
require('dotenv').config();
const express = require('express');

//app
const app = express();

//PORT
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('hello');
});

// app.get('home', res.send(index.html))

app.use('*', (req, res) => {
  res.status(400).send('sorry that did not work');
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`)) // should say 3000 (per line 12) if you don't tell it anywhere else
