const express = require("express"),
       router = express.Router(),
       require("../models/burger.js");

router.get("/", function(req, res) {
 burger.all(function(data) {
   var burgersObject = {
     burgers: data
   };
   console.log(hbsObject);
   //res.render("index", burgersObject);
 });
});
