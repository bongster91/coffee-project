// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const coffeesController = require("./controllers/coffeesController")
const morgan = require('morgan');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use(morgan('common'));

app.use("/coffees", coffeesController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to JavaScript Coffee!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found.")
})
//testing testing for git
// EXPORT
module.exports = app;
