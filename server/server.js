var express = require("express");
var app = express();
var path = require('path');

// Serve back static files
app.use(express.static(path.join(__dirname, './public/')));

app.get('/test1', function(re1, res){ res.sendFile(path.join(__dirname, './public/views/test1.html')); });
app.get('/test2', function(re1, res){ res.sendFile(path.join(__dirname, './public/views/test2.html')); });
app.get('/test3', function(re1, res){ res.sendFile(path.join(__dirname, './public/views/test3.html')); });

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/'));
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
