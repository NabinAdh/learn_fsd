var express = require("express");
var faker = require("faker");
var app = express();

// Fake names
function getFakeName(){
  return faker.name.firstName() + " " + faker.name.lastName();
}

// Listening on root
app.get("/", function(req, res){
  console.log(getFakeName() + " made request on /");
  res.send("Hi there");
});

// Listen on some pattern
app.get("/post/:moreContent", function(req, res){
  var content = req.params.moreContent;
  res.send("Welcome to " + content);
});


// Listen on bye
app.get("/bye", function(req, res){
  console.log(getFakeName() + " made request on /bye");
  res.send("Goodbye Mr");
});

// Listen on all other request, should be at last
app.get("*", function(req, res){
  console.log(getFakeName() + " made request on other page");
  res.send("You are star");
});

// Start the server
app.listen(3000, function(){
  console.log("Server Started");
});
