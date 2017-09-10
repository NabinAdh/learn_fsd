var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/", function(req, res){
  // Render home page
  res.render("home");
});

app.listen(3000, function(){
  console.log("Server listening...");
})
