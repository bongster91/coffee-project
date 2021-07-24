import { useState } from 'react';
import ReviewForm from './ReviewForm';
import smileycup from "../images/vecteezy_coffee_1209481.png";
import cuppa from "../images/cuppa.png";


function Review(props) {
    const { review, handleDelete, handleSubmit } = props;
    const [ viewEditForm, toggleEditForm ] = useState(false);

    const toggleView = () => {
        toggleEditForm(!viewEditForm);
    };

    return (
        <div>
            <button onClick={toggleView}>
                Edit {review.reviewer}
            </button>

            {viewEditForm ? (
                <ReviewForm
                    reviewDetails={review}
                    toggleView={toggleView}
                    handleSubmit={handleSubmit}
                />
            ) : (

                <div className="review-container">
                    <div>
                        <div className="profile">
                            <img className="profile-img" src={smileycup} alt="profile-placeholder" />
                        </div>

                        <div className="review-box-top">
                            <h1>{review.reviewer}</h1>
                        </div>

                        <div className="review-details">
                            <h2>{review.content}</h2>
                        </div>

                        <div className="review-rating">
                            <h2>{review.rating}</h2>
                            <img className="cuppa" src={cuppa} />
                        </div>

                        <button onClick={() => handleDelete(review.id)}>
                            Delete
                        </button>

                        </div>
                </div>
            )}
        </div>
    );
};

export default Review;
