var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vehicals', { title: 'Search Results of vehicles' });
});

module.exports = router;