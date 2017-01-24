var express = require("express");
var app = express();
var path = require('path');
var createQuiz = require('./routes/create_quiz');
var getQuiz = require('./routes/get_quiz');

// Serve back static files
app.use(express.static(path.join(__dirname, './public/')));

// Cute lil test routes!
app.get('/test1', function(re1, res){ res.sendFile(path.join(__dirname, './public/views/test/test1.html')); });
app.get('/test2', function(re1, res){ res.sendFile(path.join(__dirname, './public/views/test/test2.html')); });
app.get('/test3', function(re1, res){ res.sendFile(path.join(__dirname, './public/views/test/test3.html')); });

// Website View Routes
app.get('/quizzes', function(re1, res){ res.sendFile(path.join(__dirname, './public/views/quizzes.html')); });
app.get('/create', function(re1, res){ res.sendFile(path.join(__dirname, './public/views/create.html')); });

// Normal Routes woo
app.use('/getQuiz', getQuiz);

// Catch All -> Sends to index.html;
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/'));
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
