const express = require("express");
const db = require("../db/dbConfig");
const coffees = express.Router();
const { getAllCoffees, getOneCoffee } = require("../queries/coffees");

coffees.get("/", async (req, res) => {
  const allCoffees = await getAllCoffees();
  res.json(allCoffees);
});

coffees.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const oneCoffee = await getOneCoffee(id);
    res.json(oneCoffee);
  } catch (error) {
    return error;
  }
});

module.exports = coffees;
