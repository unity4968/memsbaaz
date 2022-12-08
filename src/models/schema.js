'use strict';
    const mongoose = require("mongoose");
    var validator = require("validator")

    const Schema = mongoose.Schema;

    const TodoSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: [true]
        },
        password: {
            type: String,
            required: true
        },
        pic: {
            type: Array
        }
    });

module.exports = mongoose.model("Nikxgramcollection", TodoSchema);
