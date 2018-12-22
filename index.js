const express = require('express');
const app = express();

app.get('/greeting', (req, res) => {
  res.send('<h1>hello world</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);