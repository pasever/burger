const express = require("express"),
       burger = require("../models/burger.js"),
       router = express.Router();


router.get("/", function(req, res) {
  //console.log(res.body);
  console.log("Hello World!");
  router.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(burgersObject) {
    res.render("index", { burgersObject: burgersObject });
  });
});


module.exports = router;
