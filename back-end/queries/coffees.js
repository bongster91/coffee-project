const db = require("../db/dbConfig");

const getAllCoffees = async () => {
  try {
    const allCoffees = await db.any("SELECT * FROM coffees");
    return allCoffees;
  } catch (error) {
    return error;
  }
};

const getOneCoffee = async (id) => {
  try {
    const oneCoffee = await db.one("SELECT * FROM coffees WHERE id=$1", id);
    return oneCoffee;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllCoffees, getOneCoffee };
