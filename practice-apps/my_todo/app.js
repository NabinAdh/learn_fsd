var express = require("express");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo_app");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// Schema for todo
var todoSchema = new mongoose.Schema({
  name: String
});

var allTodo = [];

var Todo = mongoose.model("Todo", todoSchema);

function allTodos(){
  Todo.find({}, function(err, todos){
    if (err) {
      console.log("Error");
      console.log(err);
    } else {
      console.log("All the todos");
      return todos;
    }
  });
}

app.get("/", function(req, res){
  res.render("home.ejs");
});

app.post("/", function(req, res){
  // Add the text to array
  var todo = req.body.todo;
  console.log("New todo: " + todo);

  // Instead save to database
  Todo.create({
    name: todo
  }, function(err, todo){
    if (err) {
      console.log("Something went wrong..");
      console.log(err);
    } else {
      console.log("Added new todo");
      console.log(todo);
    }
  });
  // console.log all todos so far
  allTodo = allTodos();
  console.log(allTodo);

  // redirect to same page
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started...");
});
