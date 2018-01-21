const express = require("express"),
       burger = require("../models/burger.js"),
       router = express.Router();


router.get("/", (req, res) => {
  //console.log(res.body);
  res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
  burger.all(burgersObject => {
    res.render("index", {
      burgersObject: burgersObject
    });
  });
});

router.post("/burgers/create", (req, res) => {
  burger.create(req.body.burger_name, result => {
    console.log(req.body);
    res.redirect("/burgers");
  });
});

router.put("/burgers/:id", (req, res) => {
  burger.update(req.params.id, result => {
    console.log(req.body);
    res.sendStatus(200);
  });
});

router.post("/burgers/delete/:id", (req, res) => {
  console.log(req.params.id);
  burger.delete(req.params.id, result => {
    res.sendStatus(200);
  });
});


module.exports = router;
