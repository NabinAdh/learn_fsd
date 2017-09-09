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

// Listen on bye
app.get("/bye", function(req, res){
  console.log(getFakeName() + " made request on /bye");
  res.send("Goodbye Mr");
});

// Start the server
app.listen(3000, function(){
  console.log("Server Started");
});
