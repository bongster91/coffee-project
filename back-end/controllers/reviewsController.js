const express = require("express");
const reviews = express.Router({ mergeParams: true });

const {
  getAllReviewsForCoffee,
  getOneReview,
  createReview,
} = require("../queries/reviews");

//INDEX
reviews.get("/", async (req, res) => {
  const { coffee_id } = req.params;

  const allReviews = await getAllReviewsForCoffee(coffee_id);
  res.status(200).json(allReviews);
});

//SHOW SPECIFIC REVIEW
reviews.get("/:id", async (req, res) => {
  //   const { coffee_id } = req.params;
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
reviews.post("/", async(req,res)=>{
    const { coffee_id } = req.params;
    const {review} = req.body

    try {
        const review = createReview(review, coffee_id)
        res.status(200).json(review);
    
    } catch (error) {
        res.status(404).json({
            error: "Not Found",
            message: error,
          });
    }

})

module.exports = reviews;
