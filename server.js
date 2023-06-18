// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data.json');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
