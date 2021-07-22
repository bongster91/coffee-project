const db = require("../db/dbConfig");

//QUERY FOR ALL REVIEWS CORRESPONDING A SINGLE COFFEE PRODUCT
const getAllReviewsForCoffee = async (coffee_id) => {
  try {
    const allReviews = await db.any(
      `SELECT * FROM reviews
        WHERE coffee_id = $1;`,
      coffee_id
    );
    return allReviews;
  } catch (e) {
    return e;
  }
};

//QUERY TO GET A SPECIFIC REVIEW
const getOneReview = async (id) => {
  try {
    const oneReview = await db.one(
        `SELECT * FROM reviews 
        WHERE id = $1`, 
        id
    );
    return oneReview;
  } catch (error) {
    return error;
  }
};

//QUERY TO CREATE A NEW REVIEW FOR A SPECIFC COFFEE PRODUCT
const createReview = async (review, coffee_id) => {

  try {
    const newReview = await db.one(
      `INSERT INTO reviews (coffee_id, reviewer, content, rating)
        VALUES
        ($1, $2, $3, $4)
        RETURNING * `,
      [review.reviewer, review.content, review.rating, coffee_id]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReviewsForCoffee,
  getOneReview,
  createReview,
};
