var vehicals = require('../models/vehicals');
// List of all Costumes
exports.vehicals_list = function(req, res) {
res.send('NOT IMPLEMENTED: vehicals list');
};
// for a specific Costume.
exports.vehicals_detail = function(req, res) {
res.send('NOT IMPLEMENTED: vehicals detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.vehicals_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: vehicals create POST');
};
// Handle Costume delete form on DELETE.
exports.vehicals_delete = function(req, res) {
res.send('NOT IMPLEMENTED: vehicals delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.vehicals_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: vehicals update PUT' + req.params.id);
};
// List of all Costumes
exports.vehicals_list = async function(req, res) {
    try{
    theVehicals = await vehicals.find();
    res.send(theVehicals);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };