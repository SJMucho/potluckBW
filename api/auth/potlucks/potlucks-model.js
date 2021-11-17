const db = require("../../data/db-config");

function getPotlucks() {
  return db("users").where("");
}

module.exports = {
  getPotlucks,
};
