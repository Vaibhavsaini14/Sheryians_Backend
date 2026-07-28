const express = require("express");
const app = express();

//**1st. setting up parsers for form
app.use(express.json());  
app.use(express.urlencoded({extended : true}));
// app.get("/", function(req , res){
//     res.send("Chal rha hai");
// })

//**2nd. setting up EJS for ejs pages ----->
// 1. install ejs from npm
// 2. setup ejs as a view engine
//Its like html but we can do calculations with this
app.set('view engine', 'ejs');

// 3rd. Setting up public static files
const path = require('path')
app.use(express.static(path.join(__dirname , 'public')))
//app.use(express.static(path of the folder containing all files)))

app.get("/", function(req , res){
    res.render("index");
})

// app.get("/profile/vaibhav", function(req , res){
//     res.send("Profile h yeh");
// })

app.get("/profile/:username", function(req , res){
    //req.params.username
    res.send("req.params.username");
})

app.get("/author/:username/:age", function(req , res){
    res.send(`Welcome , ${req.params.username} of age ${req.params.age}`)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

