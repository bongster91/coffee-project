const express = require("express");
const reviews = express.Router({
    mergeParams = true
})

const { 
    getAllReviewsForCoffee
  } = require("../queries/reviews");




  module.exports = reviews;