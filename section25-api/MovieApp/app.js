var express = require("express");
var request = require("request");
var app = express();

app.set("view engine", "ejs");

// Home route
app.get("/", function(req, res){
  res.render("home");
});

// Results route
app.get("/results", function(req, res){
  var query = req.query.search;
  var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
  request(url, function(error, response, body){
    if (!error && response.statusCode == 200) {
      console.log("GOT THE RESULT");
      var parsedBody = JSON.parse(body);
      res.render("results",{data: parsedBody});
    }
  });
});

app.listen(3000, function(){
  console.log("Movie app has started");
});
