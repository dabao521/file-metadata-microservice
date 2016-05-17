'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    originalName : String,
    newName : String,
    size: Number,
    when : String
});

module.exports = mongoose.model("User", userSchema);