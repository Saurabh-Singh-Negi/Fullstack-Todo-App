const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: String,
    tasks: [String]
})

module.exports = mongoose.model("todo", todoSchema);