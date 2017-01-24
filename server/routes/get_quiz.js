var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/quiztastic';

router.get('/', function (req, res){

  pg.connect(connectionString, function (err, client, done){
    if (err){
      console.log(err);
      res.sendStatus(500);
    }
    else {
      client.query('SELECT * FROM quizzes',
                    function (err, result){
                      done();
                      if (err){
                        res.sendStatus(500);
                      }
                      else {
                        done();
                        res.send(result.rows);
                      }
                    });
    }
  });
});


module.exports = router;
