
function Review(props) {
    const { review, handleDelete } = props;
    return (
        <div>
            
            <h1>{review.reviewer}</h1>
            <h2>{review.content}</h2>
            <h2>{review.rating}</h2>
            <button onClick={() => handleDelete(review.id)}>
                Delete
            </button>
        </div>
    );
};

export default Review;
