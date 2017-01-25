var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/quiztastic';

var currentQuiz = 0;
router.post('/', function (req, res){
  console.log(req.body.id);

});

module.exports = router;
