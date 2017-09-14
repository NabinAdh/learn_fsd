var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
// Listen root
app.get("/", function(req, res){
  res.render("landing");
});

// define array for data
var campgrounds = [
  {name: "Nabin Adhikari", image: "https://www.visitnc.com/resimg.php/imgcrop/2/52908/image/800/448/KerrCamping.jpg"},
  {name: "Nexus 5", image: "http://haileyidaho.com/wp-content/uploads/2015/01/Stanley-lake-camping-Credit-Carol-Waller-2011.jpg"},
  {name: "Samiksha", image: "https://i0.wp.com/mytripdesire.com/wp-content/uploads/2016/06/Gavi_Wikimedia.jpg"},{name: "Nabin Adhikari", image: "https://www.visitnc.com/resimg.php/imgcrop/2/52908/image/800/448/KerrCamping.jpg"},
  {name: "Nexus 5", image: "http://haileyidaho.com/wp-content/uploads/2015/01/Stanley-lake-camping-Credit-Carol-Waller-2011.jpg"},
  {name: "Nabin Adhikari", image: "https://www.visitnc.com/resimg.php/imgcrop/2/52908/image/800/448/KerrCamping.jpg"},
  {name: "Nexus 5", image: "http://haileyidaho.com/wp-content/uploads/2015/01/Stanley-lake-camping-Credit-Carol-Waller-2011.jpg"}

];

// Listen for campgrounds
app.get("/campgrounds", function(req, res){


  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image:image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
})

// Start server
app.listen(3000, function(){
  console.log("YelpCamp started...");
});
