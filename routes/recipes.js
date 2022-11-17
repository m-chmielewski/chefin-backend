const express = require("express");

const router = express.Router();

const dbHelper = require("../dbHelper");

router.get("", (req, res, next) => {
 const db = dbHelper.getDb();

 db
  .collection("recipes")
  .find()
  .sort({ name: 1 })
  .toArray()
  .then(response => {
   res.json(response);
  })
  .catch(next);
});

router.get("/:recipeName", (req, res, next) => {
 const db = dbHelper.getDb();

 const recipeName = req.params.recipeName;

 db
  .collection("recipes")
  .findOne({ name: recipeName })
  .then(response => {
   res.json(response);
  })
  .catch(next);
});

router.post("/create", (req, res, next) => {
 const db = dbHelper.getDb();

 db
  .collection("recipes")
  .insertOne(req.body)
  .then(response => {
   res.json(response);
  })
  .catch(next);
});

module.exports = router;
