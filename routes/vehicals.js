var express = require('express');
var router = express.Router();

const vehicals_controlers= require('../controllers/vehicals');
/* GET costumes */
router.get('/', vehicals_controlers.vehicals_view_all_Page );
module.exports = router;
//SS6
/* GET detail costume page */
router.get('/detail', vehicals_controlers.vehicals_view_one_Page);
//SS7
/* GET create costume page */
router.get('/create', vehicals_controlers.vehicals_create_Page);
//SS8
/* GET create update page */
router.get('/update', vehicals_controlers.vehicals_update_Page);
//SS9
/* GET delete costume page */
router.get('/delete', vehicals_controlers.vehicals_delete_Page);