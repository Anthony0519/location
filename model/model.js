const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    sex: {
        type:String,
        enum: ["Male", "Female"],
        required: true
    },
    location: {
        type: Object
    }
})

const dataBase = mongoose.model("location", Details)

module.exports = dataBase