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

  const handleAddReview = async (newReview) => {
    await axios
      .post(`${API}/coffees/${id}/reviews`, newReview)
      .then(
        (res) => {
          setReviews([...reviews, res.data]);
        },
        (e) => console.error(e)
      )
      .catch(
        (c) => console.warn('catch', c)
      );
  };

  const handleEditReview = async (updatedReview) => {
    await axios
      .put(`${API}/coffees/${id}/reviews/${updatedReview.id}`, updatedReview)
      .then(
        (res) => {
          const copyReviewArray = [...reviews];

          const indexUpdatedReview = copyReviewArray.findIndex(
            (review) => {
              return review.id === updatedReview.id;
            });

          copyReviewArray[indexUpdatedReview] = res.data;
          setReviews(copyReviewArray);
        },
        (e) => console.error(e)
      )
      .catch(
        (c) => console.warn('catch', c)
      );
  };

  const reviewHeader = {
    fontFamily: "Brooke",
  }

  return (
    <section className="reviews">
      <div className="review-heading">
        <h1 style={reviewHeader}><span>Have you tried our coffee ?</span></h1>

        <h3>Leave us a review</h3>
        <ReviewForm
          handleSubmit={handleAddReview}
        />

        <h1 style={reviewHeader}><span>Customer Reviews</span></h1>

        <div className="reviews-container">
          <div className="review-box">
            <ol>
              {reviews.map((review) => {
                return (
                    <li key={review.id}>
                      <Review
                        review={review}
                        handleDelete={handleDelete}
                        handleSubmit={handleEditReview}
                      />
                    </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Reviews;
