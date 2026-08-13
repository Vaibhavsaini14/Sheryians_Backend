const { default: mongoose } = require('mongoose');
const monngoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/testingDatabase`);
const userSchema = mongoose.Schema({
    username : {
        type : String
    } ,
    email : String ,
    age : Number ,
    posts : [ // array of Ids
        {
            type: mongoose.Schema.Types.ObjectId ,
            ref: 'post'
        }
    ]
        
    
})

module.exports = mongoose.model('user' , userSchema);