const db = require("../../data/db-config");

function getPotlucks() {
  return db("potlucks");
}

module.exports = {
  getPotlucks,
};
