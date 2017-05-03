var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/quiztastic';

var currentQuiz = 0;
router.post('/', function (req, res){
  var questions, answers;

  console.log(req.body.id);

  pg.connect(connectionString, function (err, client, done){
    if (err){
      console.log(err);
      res.sendStatus(500);
    }
    else {
      client.query('SELECT * FROM questions WHERE quiz_id="' + req.body.id +'"',
                    function (err, result){
                      done();
                      if (err){
                        res.sendStatus(500);
                      }
                      else {
                        done();
                        console.log(result.rows);
                        questions = result.rows;
                      }
                    });
              }
            });
});

module.exports = router;
