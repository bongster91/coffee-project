// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const coffeesController = require("./controllers/coffeesController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

app.use("/coffees", coffeesController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to JavaScript Coffee!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found.")
})

// EXPORT
module.exports = app;
