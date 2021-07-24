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

    const buttonStyle = {
        width: "90px",
        height: "30px",
        marginTop: "70px",
    }

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
                    <div className="profile">
                        <div className="profile-img">
                            <img src={smileycup} alt="profile-placeholder" />
                        </div>

                        <div className="review-box-top">
                            <h5><span>{review.reviewer} says: </span> <h4>{review.content}</h4></h5>

                        </div>

                        <div className="review-details">

                        </div>

                        <div className="review-rating">
                            <p>{review.rating}</p>
                            <img className="cuppa" src={cuppa} />
                        </div>

                        <button style={buttonStyle} onClick={() => handleDelete(review.id)}>
                            Delete
                        </button>

                        </div>
                    </div>
            )}
        </div>
    );
};

export default Review;
