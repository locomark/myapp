var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', creator: 'Mark LoSacco', createdate: 'Mar 17, 2015' });
});

router.post('/', function(req, res, next) {
  res.send('This is a post');
});

router.put('/', function(req, res, next) {
  res.send('This is a put');
});

router.delete('/', function(req, res, next) {
  res.send('This is a delete');
});

module.exports = router;
