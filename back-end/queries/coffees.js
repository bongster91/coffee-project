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

const createCoffee = async (coffee) => {
  try {
    const newCoffee = await db.one(
      `INSERT INTO coffees 
      (name, price, origin, method, url, alt)
      VALUES
      ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `, 
      [
        coffee.name,
        coffee.price,
        coffee.origin,
        coffee.method,
        coffee.url,
        coffee.alt
      ]
    );
    return newCoffee;
  } catch (error) {
    return error
  }
};

const updateCoffee = async (id, coffee) => {
  try {
    const updatedCoffee = await db.one(
      `UPDATE coffees
      SET
      name=$1, price=$2, origin=$3, method=$4, url=$5, alt=$6
      WHERE
      id=$7
      RETURNING *
      `, 
      [
        coffee.name,
        coffee.price,
        coffee.origin,
        coffee.method,
        coffee.url,
        coffee.alt,
        id
      ]
    );
    return updatedCoffee;
  } catch (error) {
    return error
  }
};

const deleteCoffee = async (id) => {
  try {
    const deletedCoffee = await db.one(
      `DELETE FROM coffees
      WHERE id=$1
      RETURNING *
      `, id
    );
    return deletedCoffee;
  } catch (error) {
    return error
  }
};

module.exports = { 
  getAllCoffees, 
  getOneCoffee,
  createCoffee,
  updateCoffee,
  deleteCoffee
};
