var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var vehicals_controller = require('../controllers/vehicals');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/vehicals', vehicals_controller.vehicals_create_post);
// DELETE request to delete Costume.
router.delete('/vehicals/:id', vehicals_controller.vehicals_delete);
// PUT request to update Costume.
router.put('/vehicals/:id', vehicals_controller.vehicals_update_put);
// GET request for one Costume.
router.get('/vehicals/:id', vehicals_controller.vehicals_detail);
// GET request for list of all Costume items.
router.get('/vehicals', vehicals_controller.vehicals_list);
module.exports = router;
// API