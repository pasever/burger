const express = require("express"),
   bodyParser = require("body-parser"),
         PORT = process.env.PORT || 8000,
          app = express(),
       routes = require("./controllers/burgers_controller.js");

app.use(express.static("public"));




app.use(bodyParser.urlencoded({ extended: false }));
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");








app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port: ", PORT);
});
