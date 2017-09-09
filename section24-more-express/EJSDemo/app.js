var express = require("express");
var app = express();

// Listening on root
app.get("/", function(req, res){
  // res.send("<h1>Welcome to homepage</h1><p>lorem ipsum</p>");
  res.render("home.ejs");
})

// Listening on custom url
app.get("/love/:thing", function(req, res){
  var thing = req.params.thing;
  res.send("You fell in love with " + thing);
});

// Starting server
app.listen(3000, function(){
  console.log("Server started");
});
