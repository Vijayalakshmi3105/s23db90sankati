var express = require('express');
var router = express.Router();

const vehicals_controlers = require('../controllers/vehicals');
/* GET costumes */
router.get('/', vehicals_controlers.vehicals_view_all_Page);
router.get('/vehicals/:id', vehicals_controlers.vehicals_detail);
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
module.exports = router;
//SS6
/* GET detail costume page */
router.get('/detail', secured, vehicals_controlers.vehicals_view_one_Page);
//SS7
/* GET create costume page */
router.get('/create', secured, vehicals_controlers.vehicals_create_Page);
//SS8
/* GET create update page */
router.get('/update', secured, vehicals_controlers.vehicals_update_Page);
//SS9
/* GET delete costume page */
router.get('/delete', secured, vehicals_controlers.vehicals_delete_Page);