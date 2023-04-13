var express = require('express');
var router = express.Router();

const vehicals_controlers= require('../controllers/vehicals');
/* GET costumes */
router.get('/', vehicals_controlers.vehicals_view_all_Page );
module.exports = router;