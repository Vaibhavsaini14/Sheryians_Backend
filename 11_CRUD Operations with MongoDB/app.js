const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get("/" , function(req , res){
    res.send("Hey");
})

app.get("/create" , async function(req , res){
    let createdUser = await userModel.create({  // Asynchronus Code (Pehle run nhi hota main stack khali hone pr run kiya jaata hai)
        name: "Vaibhav",
        email: "vaibhav@gmail.com ",
        username: "vaibhavsaini"
    })
    // console.log("hey");
    res.send(createdUser);
})

app.get("/read" , async function(req , res){
    let users = await userModel.find();
    res.send(users);
})

app.get("/update" , async function(req , res){
    let updatedUser = await userModel.findOneAndUpdate({username: "vaibhavsaini" }, {name: "Vaibhav Saini"} , {new: true} )   // (findone , update , {new : true})
    res.send(updatedUser);
})

app.get("/delete" , async function(req , res){
    let users = await userModel.findOneAndDelete({_id: "6a6fa76529488da3978036bd"});
    res.send(users);
})

app.listen(3000);