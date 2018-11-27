var express = require('express');
var ws = require('../engine/ws');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chat_in', { title: 'test' });
});

module.exports = router;
