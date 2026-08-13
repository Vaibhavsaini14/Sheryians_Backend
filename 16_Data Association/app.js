const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post'); 


app.get("/" , function(req , res){
    res.send("Hello")
})

app.get("/create" , async function(req , res){
   let user = await userModel.create({
    username  : 'vaibhav',
    age: 20 ,
    email: "vaibhav@gmail.com"
   })
   res.send(user);
})
app.get("/post/create" , async function(req , res){
   let post = await postModel.create({
    postdata: "Hey how are you",
    user: "6a7e1dbef3fed728e4197753"
   })
   let user = await userModel.findOne({_id: "6a7e1dbef3fed728e4197753"});
   user.posts.push(post._id)
   await user.save();
   res.send({post , user});
})

app.listen(3000);