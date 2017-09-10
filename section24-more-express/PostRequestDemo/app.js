var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var myFriends = ["Milan","Bikash","Ramesh","Sangam"];

// listen for root
app.get("/",function(req, res){
  res.render("home");
});

// Listen for post request
app.post("/addfriend", function(req, res){
  var friend = req.body.newFriend;
  myFriends.push(friend);
  res.redirect("/friends");
});

// Listen for friends
app.get("/friends", function(req, res){
  res.render("friends",{friends: myFriends});
});
// Start server
app.listen(3000, function(){
  console.log("Server started");
});
