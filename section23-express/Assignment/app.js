var express = require("express");
var app = express();

// Route to listen root
app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

// Listen to some pattern
app.get("/speak/:animal", function(req, res){
  var speak = {
    cow: "Moo",
    pig: "Oink",
    dog: "Woof Woof",
    cat: "Meow"
  };
  var animal = req.params.animal.toLowerCase();
  var speak = speak[animal];

  res.send("The " + animal + " says '" + speak + "'");
});

// Listen for some pattern and repeat the task
app.get("/repeat/:text/:num", function(req, res){
  var message = req.params.text;
  var freq = Number(req.params.num);
  var display = "";

  for (var i = 0; i < freq; i++) {
    display += message + " ";
  }
  res.send(display);
});

// Listen for wildcards
app.get("*", function(req, res){
  res.send("Sorry, page not found... What are you doing with your life?");
});

// Start the server
app.listen(3000, function(){
  console.log("Server started at 3000");
});
