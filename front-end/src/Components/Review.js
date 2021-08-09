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
    };

    return (
        <div>
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
                            <h4>
                                <span>{review.reviewer} says: </span> 
                                <p>{review.content}</p>
                            </h4>
                        </div>

                        <div className="review-rating">
                            <p><strong>{review.rating}</strong> out of 5</p>
                            <img className="cuppa" src={cuppa} alt='cuppa' />
                        </div>

                        <button style={buttonStyle} onClick={toggleView}>
                            Edit
                        </button>

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
