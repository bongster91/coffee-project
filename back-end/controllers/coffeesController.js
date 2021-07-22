const express = require("express");
const coffees = express.Router();
const reviewsController = require("./reviewsController")

const { 
  getAllCoffees, 
  getOneCoffee,
  createCoffee,
  updateCoffee,
  deleteCoffee
} = require("../queries/coffees");


coffees.get("/", async (req, res) => {
  const allCoffees = await getAllCoffees();
  res.status(200).json(allCoffees);
});

coffees.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const oneCoffee = await getOneCoffee(id);
    res.status(200).json(oneCoffee);
  } catch (error) {
    res.status(404).json({
      error: 'Not Found',
      message: error
    });
  };
});

coffees.post("/", async (req, res) => {
  try {
    const coffee = await createCoffee(req.body);
    res.status(200).json(coffee);
  } catch (error) {
    res.status(404).json({
      error: error
    });
  };
});

coffees.put("/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const updatedCoffee = await updateCoffee(id, req.body);
    res.status(200).json(updatedCoffee);
  } catch (error) {
    res.status(404).json({
      message: `${id} does not exist`,
      error: error
    });
  };
});

coffees.delete("/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedCoffee = await deleteCoffee(id);
    res.status(200).json(deletedCoffee);
  } catch (error) {
    res.status(404).json({
      message: 'Not found',
      error: error
    });
  };
});

coffees.use("/:coffee_id/reviews", reviewsController)

module.exports = coffees;
