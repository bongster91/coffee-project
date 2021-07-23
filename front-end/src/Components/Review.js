import { useState } from 'react';
import ReviewForm from './ReviewForm';

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
                <div>

                    <h1>{review.reviewer}</h1>
                    <h2>{review.content}</h2>
                    <h2>{review.rating}</h2>

                    <button onClick={() => handleDelete(review.id)}>
                        Delete
                    </button>

                </div>
            )}
        </div>
    );
};

export default Review;
