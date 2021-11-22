// const express = require("express");
// const router = express.Router();
// // const Users = require("./users-model");
// const JWT_SECRET = require("../secret");


router.post("/users/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await findBy(username);

    if (!user) {
      return res.status(401).json("Invalid credentials");
    }
    const passwordValid = await bcrupt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json("Invalid credentials");
    }
    console.log(JWT_SECRET);
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.cookie("token", token);
    res.json({ message: `Welcome ${user.username}` });
  } catch (err) {
    next(err);
  }
});

// module.exports = router;
