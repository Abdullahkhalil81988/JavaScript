const express = require('express');
const path = require('path');

const app = express();
const port = 30000;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello ', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});