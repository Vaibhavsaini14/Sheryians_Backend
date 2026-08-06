const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testapp1")

const userSchema = mongoose.Schema({  
    name: String,
    imageurl: String,
    email: String
})

module.exports = mongoose.model("user" , userSchema);