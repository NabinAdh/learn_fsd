var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

// Listening on root
app.get("/", function(req, res){
  // res.send("<h1>Welcome to homepage</h1><p>lorem ipsum</p>");
  res.render("home");
})

// Listening on custom url
app.get("/love/:thing", function(req, res){
  var thing = req.params.thing;
  res.render("love",{thingVar: thing});
});

// Listening for post
app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "Nabin"},
    {title: "Node seems very tough", author: "Everyone"},
    {title: "EJS is tougher", author: "Nabin"},
  ];
  res.render("posts", {posts: posts});
});

// Starting server
app.listen(3000, function(){
  console.log("Server started");
});
