const express = require("express"),
       burger = require("../models/burger.js"),
       router = express.Router();

// router.get("/", function(req, res) {
//  burger.all(function(data) {
//
//    let burgersObject = {
//      burgers: data
//    };
//    console.log(burgersObject);
//    //res.render("index", burgersObject);
//  });
// });

router.get("/", function(req, res) {
  router.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burgers.all(function(burgerObject) {
    res.render("index", { burgerObject: burgerObject });
  });
});


module.exports = router;
