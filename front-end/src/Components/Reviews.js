import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiURL } from "../util/apiURL";
import Review from "./Review";

const apiURL = apiURL();

function Reviews({ history, match }) {
  let { id, coffees_id } = match.params;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`${apiURL}/coffees/${coffees_id}/reviews`).then((res) => {
      setReviews(res.data);
    });
  }, [id, history]);

  const handleDelete = async () => {
    await axios.delete(`${apiURL}/coffees/${id}/reviews`).then(() => {
      history.push(`${apiURL}/coffees/reviews`);
    });
  };

  return <div></div>;
}


export default Reviews;
