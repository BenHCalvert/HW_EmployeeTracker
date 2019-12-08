const express = require("express");
const connection = require("./config/connection.js");
const PORT = process.env.PORT || 8080;
const app = express();

// Parse application body
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/Controller.js");

// app.use(routes);

// Start server so it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
