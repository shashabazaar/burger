var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "name", "supreme"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    res.json({ id: result.insertid });
    });

  });
  
  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
      } else {
          res.status(200).end();
        }
      });
    });
    module.exports = router;