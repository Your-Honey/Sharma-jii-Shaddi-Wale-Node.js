const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home");
});

app.post("/",function(req,res){
  console.log(req.body);
  res.render("searchResult");
});

app.post("/searchResult/:id",function(req,res){
  res.render("personDetails")
//res.send("Details of person with id:"+req.params.id);
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
