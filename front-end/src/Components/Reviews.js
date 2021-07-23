import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = apiURL();

function Reviews() {
  let { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/coffees/${id}/reviews`)
      .then((res) => {
        setReviews(res.data);
        console.log(res.data)
      });
  }, [id]);
  
  // const handleDelete = async () => {
  //     await axios.delete(`${apiURL}/coffees/${id}/reviews`).then(() => {
  //         history.push(`${apiURL}/coffees/reviews`);
  //       });
  //   };
    
    
  return (
    <section>
      <h1>Reviews</h1>

      <ol>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <Review review={review} />
            </li>
          )
        })}
      </ol>

      <ReviewForm />
      <h2>Add a new review</h2>
    </section>
  )
}

export default Reviews;
