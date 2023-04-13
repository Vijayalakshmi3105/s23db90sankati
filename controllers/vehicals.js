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
    // VIEWS
// Handle a show all view
exports.vehicals_view_all_Page = async function(req, res) {
    try{
    theVehicals = await vehicals.find();
    res.render('vehicals', { title: 'Vehical Search Results', results: theVehicals });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle Costume create on POST.
exports.vehicals_create_post = async function(req, res) {
    console.log(req.body)
    let document = new vehicals();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.type = req.body.type;
    document.milage = req.body.milage;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };