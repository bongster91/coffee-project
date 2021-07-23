import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = apiURL();

function Reviews() {
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/coffees/${id}/reviews`)
      .then((res) => {
        setReviews(res.data);
      });
  }, [id]);
  
  const handleDelete = async (reviewID) => {
      await axios
        .delete(`${API}/coffees/${id}/reviews/${reviewID}`)
        .then(
          (res) => {
            const copyReviewArray = [...reviews];
            const indexOfDeletedReview = copyReviewArray.findIndex(
              (review) => {
                return review.id === reviewID;
              });
            copyReviewArray.splice(indexOfDeletedReview, 1);
            setReviews(copyReviewArray);
          },
          (e) => console.error(e)
        )
        .catch(
          (c) => console.warn('catch', c)
        );
  };
    
    
  return (
    <section>
      <h1>Reviews</h1>

      <ReviewForm />
      <h2>Add a new review</h2>

      <ol>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <Review 
                review={review}
                handleDelete={handleDelete}
              />
            </li>
          )
        })}
      </ol>
    </section>
  )
}


export default Reviews;
