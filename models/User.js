const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "name": String,
    "password": String,
    "group": {
        "deposite": Number,
        "mealCount": Number,
        "expense": Number,
        "dueAmount": Number
    },
    "id": {
        type: String,
        required: true
    },
    "groupId": String

});

module.exports = mongoose.model("User", userSchema, "users");