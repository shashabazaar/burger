// bringing in dependencies 
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var exphbs = require("express-handlebars");

// var databaseUri = 'mongodb://localhost/week18day3mongoose';
// if (process.env.MONGODB_URI) {
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
// // }else {
// // mongoose.connect(databaseUri);
// }

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

