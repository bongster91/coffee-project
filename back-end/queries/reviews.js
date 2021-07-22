const db = require("../db/dbConfig");

const getAllReviewsForCoffee = async (coffeeId) => {
  try {
    const allReviews = await db.any(
      `SELECT * FROM reviews
        WHERE coffee_id = $1`,
      coffeeId);
    return allReviews;
  } catch (error) {
    return error;
  }
};




module.exports = {
    getAllReviewsForCoffee,
}
