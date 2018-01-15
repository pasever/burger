const express = require("express"),
       router = express.Router(),
       burger = require("../models/burger.js");

router.get("/", function(req, res) {
 burger.all(function(data) {
   let burgersObject = {
     burgers: data
   };
   console.log(burgersObject);
   //res.render("index", burgersObject);
 });
});
