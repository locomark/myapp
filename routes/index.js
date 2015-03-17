var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', creator: 'Mark LoSacco', createdate: 'Mar 17, 2015' });
});

module.exports = router;
