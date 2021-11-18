const express = require("express");
const router = express.Router();
const Potlucks = require("./potlucks-model");
// const { restricted } = require("./middleware/restricted");

router.get("api/potlucks", (req, res) => {
  Potlucks.getPotlucks()
    .then((potlucks) => {
      res.status(200).json(potlucks);
    })
    .catch((err) => {
      res.status(500).json("You are not authorized");
    });
});

module.exports = router;
