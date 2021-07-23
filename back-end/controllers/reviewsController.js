const express = require("express");
const reviews = express.Router({ mergeParams: true });

const {
  getAllReviewsForCoffee,
  getOneReview,
  createReview,
  updateReview,
  deleteReview,
} = require("../queries/reviews");

//INDEX
reviews.get("/", async (req, res) => {
  const { coffee_id } = req.params;

  const allReviews = await getAllReviewsForCoffee(coffee_id);
  res.status(200).json(allReviews);
});

//SHOW SPECIFIC REVIEW
reviews.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const oneReview = await getOneReview(id);
    res.status(200).json(oneReview);
  } catch (error) {
    res.status(404).json({
      error: "Not Found",
      message: error,
    });
  }
});

//CREATE REVIEW
reviews.post("/", async (req, res) => {
  const { coffee_id } = req.params;
  try {
    const review = await createReview(req.body, coffee_id);
    console.log(review);
    res.status(200).json(review);
  } catch (error) {
    res.status(404).json({
      error: "Not Found",
      message: error,
    });
  }
});

//UPDATE REVIEW
reviews.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedReview = await updateReview(id, req.body);
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(404).json({
      error: "Not Found",
      message: error,
    });
  }
});

//DELETE REVIEW
reviews.delete ("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReview = await deleteReview(id)
    res.status(200).json(deletedReview)
  } catch (error) {
    res.status(404).json({
      error: "Not Found",
      message: error,
    });
  }
});

module.exports = reviews;
