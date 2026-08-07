const cookieParser = require('cookie-parser');
const express = require ('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());
app.get("/" , function(req , res){
    res.cookie("name" , "vaibhav");  // cookie save & set k liye res use hoga
    res.send("Done")
})
app.get("/read" , function(req , res){
    console.log(req.cookies);  // read krne k liye req use hoga
    res.send("Read page");
})

app.get("/" , function(req , res){
    bcrypt.genSalt(10 , function(err , salt){
        bcrypt.hash("Vaibhav@101" , salt , function(err , hash){
            console.log(hash);         
        })
    })
})

app.get("/", function(req , res){
    bcrypt.compare("Vaibhav@101" ,"$2b$10$C9hNTc7xd1MdMEms89aZUe1TCTQ1.AbEq2Xo9P8hND0buzH3mTwQu"    , function(err , result){
        console.log(result); 
    })
})
app.get("/", function(req , res){
    let token = jwt.sign({email: "vaibhav@.com"} , "secret");
    res.cookie("token" , token);
    console.log(token);
    res.send("token send")
    
})
app.get("/read" , function(req , res){
    console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token , "secret");
    console.log(data);
    
})
app.listen(3000); 