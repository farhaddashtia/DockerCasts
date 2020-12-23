const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('How are you doing? This is the first web application that we made using Docker!');
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
