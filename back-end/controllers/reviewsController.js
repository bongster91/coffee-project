const express = require("express");
const reviews = express.Router({
    mergeParams = true
})

const { 
    getAllReviewsForCoffee
  } = require("../queries/reviews");

reviews.get("/", async (req,res)=>{
    const allReviews = await getAllReviewsForCoffee()
    res.status(200).json(allReviews)
})


  module.exports = reviews;