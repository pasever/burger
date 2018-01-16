const express = require("express"),
       burger = require("../models/burger.js"),
       router = express.Router();


router.get("/", function(req, res) {
  router.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burgers.all(function(burgersObject) {
    res.render("index", { burgersObject: burgersObject });
  });
});


module.exports = router;
