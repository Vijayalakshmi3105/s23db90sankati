const mongoose = require("mongoose")
const vehicalSchema = mongoose.Schema({
type: String,
milage: String,
price: Number
})
module.exports = mongoose.model("vehicals",
vehicalSchema)