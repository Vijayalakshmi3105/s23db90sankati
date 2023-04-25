const mongoose = require("mongoose")
const vehicalSchema = mongoose.Schema({

    //Name: String,

    //LifeSpan: String,

    // Speed: Number,

    type: {

        type: String,

        required: true
    },

    milage: {

        type: String,

        required: true
    },

    price: {

        type: Number,

        required: true,

        min: 0,

        max: 2000000




    }

})


// const vehicalSchema = mongoose.Schema({
// type: String,
// milage: String,
// price: Number
// })
module.exports = mongoose.model("vehicals",
    vehicalSchema)