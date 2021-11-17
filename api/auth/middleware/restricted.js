const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../auth/secret");

function restricted() {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json("Token required");
  } else {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json("Token invalid");
      } else {
        req.decodedToken = decoded;
        next();
      }
    });
  }
}

module.exports = {
  restricted,
};
