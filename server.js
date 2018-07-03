const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('Go to url/index.html');
});

app.listen(3000, () => {
  console.log('Port is up!');
});
