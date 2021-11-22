const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./data/db-config");
const jwtSecret = require("./auth/secret");

function getAllUsers() {
  return db("users");
}

const findBy = (username) => {
  return db("users").where({ username }).first();
};

async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
  const [newUserObject] = await db("users").insert(user, [
    "user_id",
    "username",
    "password",
  ]);
  return newUserObject; // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

// const usersRouter = require("../users/users-router");
// const potlucksRouter = require(".../potlucks/potlucks-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/api/users", async (req, res) => {
  res.json(await getAllUsers());
});

server.post("/api/users", async (req, res) => {
  res.status(201).json(await insertUser(req.body));
});

server.post("api/users/login", async (req, res, next) => {
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
    console.log(jwtSecret);
    const token = jwt.sign({ userId: user.id }, jwtSecret);
    res.cookie("token", token);
    res.json({ message: `Welcome ${user.username}` });
  } catch (err) {
    next(err);
  }
});

module.exports = server;
