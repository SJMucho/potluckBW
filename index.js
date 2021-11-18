require("dotenv").config();

const server = require("./api/server");

const port = process.env.PORT;

server.listen(port, () => {
  console.log("listening on " + port);
});

// require("dotenv").config();
// const server = require("./api/server");

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => {
//   console.log(`\n=== Server listening on port ${PORT} ===\n`);
// });
