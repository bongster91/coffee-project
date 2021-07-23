import ReviewForm from './ReviewForm';

function Review({ review }) {
    return (
        <div>
            <h1>{review.reviewer}</h1>
            <h2>{review.content}</h2>
            <h2>{review.rating}</h2>
        </div>
    );
};

export default Review;
