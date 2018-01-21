const express = require("express"),
  burger = require("../models/burger.js"),
  router = express.Router();


router.get("/", function(req, res) {
  //console.log(res.body);
  console.log("Hello World!");
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(burgersObject) {
    res.render("index", {
      burgersObject: burgersObject
    });
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(req.body);
    console.log(result);
    res.redirect("/burgers");
  });
});

router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(req.body);
    console.log(result);
    res.sendStatus(200);
  });
});

router.post("/burgers/delete/:id", function(req, res) {
  console.log(req.params.id);
  burger.delete(req.params.id, function(result) {
    res.sendStatus(200);
  });
});


module.exports = router;
