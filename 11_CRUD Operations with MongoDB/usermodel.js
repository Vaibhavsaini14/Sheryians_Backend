const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/practice`)

const userSchema = mongoose.Schema({  // Schema --> Har user ko kya kya details deni haii
    name: String,
    username: String,
    email: String
})

// Model kyu chaiye ya kyo banana hai ?? --> Iss ke bais pr hi hum CRUD operation kr paate hai

module.exports = mongoose.model("user" , userSchema);

 
