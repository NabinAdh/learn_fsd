var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


var tasks = [
  "Go to sleep",
  "Call Mom",
  "Claim Bupa"
];

app.get("/", function(req, res){
  res.render("home.ejs",{tasks: tasks});
});

app.post("/", function(req, res){
  // Add the text to array
  var todo = req.body.todo;
  console.log("New todo: " + todo);
  tasks.push(todo);
  res.redirect("/")
  // redirect to root
});

app.listen(3000, function(){
  console.log("Server started...");
});
