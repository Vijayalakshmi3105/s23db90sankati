var vehicals = require('../models/vehicals');
// List of all Costumes
exports.vehicals_list = function (req, res) {
    res.send('NOT IMPLEMENTED: vehicals list');
};
// for a specific Costume.
exports.vehicals_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await vehicals.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// for a specific Costume.
// exports.vehicals_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: vehicals detail: ' + req.params.id);
// };
// Handle Costume create on POST.
exports.vehicals_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: vehicals create POST');
};
// Handle Costume delete form on DELETE.
exports.vehicals_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: vehicals delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
// exports.vehicals_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: vehicals update PUT' + req.params.id);
// };
// Handle Costume update form on PUT.
exports.vehicals_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await vehicals.findById(req.params.id)
        // Do updates of properties
        if (req.body.type)
            toUpdate.type = req.body.type;
        if (req.body.milage) toUpdate.milage = req.body.milage;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// List of all Costumes
exports.vehicals_list = async function (req, res) {
    try {
        theVehicals = await vehicals.find();
        res.send(theVehicals);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.vehicals_view_all_Page = async function (req, res) {
    try {
        theVehicals = await vehicals.find();
        res.render('vehicals', { title: 'Vehical Search Results', results: theVehicals });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume create on POST.
exports.vehicals_create_post = async function (req, res) {
    console.log(req.body)
    let document = new vehicals();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.type = req.body.type;
    document.milage = req.body.milage;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete on DELETE.
exports.vehicals_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await vehicals.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

//Code added for SS6
// Handle a show one view with id specified by query
exports.vehicals_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await vehicals.findById(req.query.id)
        res.render('vehicalsdetail',
            { title: 'vehicals Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
//SS7
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.vehicals_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('vehicalscreate', { title: 'vehicals Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
//SS8
// Handle building the view for updating a costume.
// query provides the id
exports.vehicals_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await vehicals.findById(req.query.id)
        res.render('vehicalsupdate', { title: 'vehicals Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
//SS9
// Handle a delete one view with id from query
exports.vehicals_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await vehicals.findById(req.query.id)
    res.render('vehicalsdelete', { title: 'vehicals Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };