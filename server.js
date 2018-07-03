const express = require('express');
const fs = require('fs');


var app = express();
//
// app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.listen(3000, () => {
  console.log('Port is up!');
});
