const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
const path = require('path');
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://admin:insignia032021@cluster0.swsaw.mongodb.net/profiledb",{useNewUrlParser: true}, { useUnifiedTopology: true });

//const url =`mongodb+srv://admin:<fxw5RYKnGuWgKu9>@cluster0.swsaw.mongodb.net/userdetails?retryWrites=true&w=majority`;
const profileschema={
  firstname: String,
  lastname: String,
  email: String,
  collegename: String,
  dept: String,
  yop: String
}
const Profiles=mongoose.model("Profiles",profileschema);

app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,'/profile-backend',  'profile.html'));
})

//app.post
app.post("/",function(req,res){
  let newProfiles=new Profiles({
    firstname: req.body.firstname,
  lastname: req.body.lastname,
  email: req.body.email,
  collegename: req.body.collegename,
  dept: req.body.dept,
  yop: req.body.yop
  });
  newProfiles.save();
  res.redirect('/');
})
app.listen(3000,function(){
  console.log("server is running on 3000");
}) 