const db = require("../db/dbConfig");

//QUERY FOR ALL REVIEWS CORRESPONDING A SINGLE COFFEE PRODUCT
const getAllReviewsForCoffee = async (coffee_id) => {
  try {
    const allReviews = await db.any(
      `
        SELECT * FROM reviews
        WHERE coffee_id = $1;
      `
      , coffee_id
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
      `
        SELECT * FROM reviews 
        WHERE id = $1;
      `
      , id
    );

    return oneReview;
  } catch (error) {
    return error;
  };
};

//QUERY TO CREATE A NEW REVIEW FOR A SPECIFC COFFEE PRODUCT
const createReview = async (review, coffee_id) => {
  try {
    const newReview = await db.one(
      `
        INSERT INTO reviews 
        (reviewer, content, rating, coffee_id)
        VALUES 
        ($1, $2, $3, $4)
        RETURNING * ;
      `,
      [
        review.reviewer, 
        review.content, 
        review.rating, 
        coffee_id
      ]
    );

    return newReview;
  } catch (error) {
    return error;
  };
};

//QUERY TO UPDATE SPECIFIC REVIEW 
const updateReview = async (id, review) => {
  try {
    const updatedReview = await db.one(
      `
        UPDATE reviews 
        SET 
        reviewer = $1, content = $2, rating = $3
        WHERE id = $4
        RETURNING * ;
      `,
      [
        review.reviewer,
        review.content,
        review.rating,
        id
      ]
    );   
    
    return updatedReview;
  } catch (error) {
    return error;
  };
};

//QUERY TO DELETE SPECIFIC REVIEW
const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      `
        DELETE FROM reviews
        WHERE id = $1
        RETURNING * ;
      `
      , id
    );

    return deletedReview;
  } catch (error) {
    return error;
  };
};

module.exports = {
  getAllReviewsForCoffee,
  getOneReview,
  createReview,
  updateReview,
  deleteReview,
};
