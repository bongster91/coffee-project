import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ReviewForm(props) {
    let { id } = useParams();

    const {
        reviewDetails,
        toggleView
    } = props;

    const [ review, setReview ] = useState({
        reviewer: '',
        content: '',
        rating: '',
        coffee_id: id
    });

    const handleTextChange = (e) => {
        setReview({ ...review, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(review, id);

        if(reviewDetails) {
            toggleView();
        };

        setReview({
            reviewer: '',
            content: '',
            rating: '',
            coffee_id: id
        });
    };

    useEffect(() => {
        if (reviewDetails) {
            setReview(reviewDetails);
        }
    }, [id, reviewDetails, props]);

    return (
        <div className="add-review">
            {props.children}
            <form onSubmit={handleSubmit}>
                <label htmlFor='reviewer'>Name</label>
                <input
                    id='reviewer'
                    value={review.reviewer}
                    placeholder='Name'
                    type='text'
                    onChange={handleTextChange}
                    required
                />

                <label htmlFor='content'>Review</label>
                <input
                    id='content'
                    value={review.content}
                    placeholder='Leave review here'
                    type='text'
                    onChange={handleTextChange}
                    required
                />

                <label htmlFor='rating'>Rating: 0-5</label>
                <input
                    id='rating'
                    value={review.rating}
                    placeholder='0'
                    type='number'
                    onChange={handleTextChange}
                    min='0'
                    max='5'
                    required
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;
