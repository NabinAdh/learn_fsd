var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperment: String
});

var Cat = mongoose.model("Cat", catSchema);
//
// // add new cat to database
// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperment: "Evil"
// });
//
// george.save(function(err, cat){
//   if (err) {
//     console.log("Some thing went wrong");
//   }else {
//     console.log("Saved a cat to database");
//     console.log(cat);
//   }
// })

Cat.create({
  name: "Snow White",
  age: 15,
  temperment: "Bland"
}, function(err, cat){
  if (err) {
    console.log(err);
  } else{
    console.log(cat);
  }
});

// retrieve all cats from db and console.log
Cat.find({}, function(err, cats){
  if (err) {
    console.log("Error");
    console.log(err);
  } else{
    console.log("All the cats");
    console.log(cats);
  }
});
