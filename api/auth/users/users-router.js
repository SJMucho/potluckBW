const express = require("express");
const router = express.Router();
const Users = require("./users-model");

router.get("/users", (req, res, next) => {
  Users.getUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

module.exports = router;