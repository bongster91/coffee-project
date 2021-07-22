import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiURL } from '../util/apiURL';

const API = apiURL();

function EditForm({ history, match }) {
    let { id } = match.params;

    const [ coffee, setCoffee ] = useState({
        name: '',
        price: 0.00,
        origin: '',
        method: '',
        url: '',
        alt: ''
    });

    const updateCoffee = (updatedCoffee) => {
        axios
            .put(`${API}/coffees/${id}`, updatedCoffee)
            .then(
                () => history.push(`/coffees/${id}`),
                (e) => console.error(e)
            )
            .catch(
                (c) => console.warn('catch', c)
            )
    };

    const handleTextChange = (e) => {
        setCoffee({ ...coffee, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCoffee(coffee, id);
    };

    useEffect(() => {
        axios
            .get(`${API}/coffees/${id}`)
            .then(
                (response) => setCoffee(response.data),
                (e) => console.error(e)
            )
            .catch(
                (c) => console.warn('catch', c)
            );
    }, [id, history])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input 
                    id='name'
                    value={coffee.name}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Name of Product'
                    required
                />

                <label htmlFor='price'>Price</label>
                <input 
                    id='price'
                    value={coffee.price}
                    type='number'
                    onChange={handleTextChange}
                    placeholder={`$0.00`}
                    min='0'
                    step='.01'
                    required
                />

                <label htmlFor='origin'>Origin</label>
                <input 
                    id='origin'
                    value={coffee.origin}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Country of Origin'
                    required
                />

                <label htmlFor='method'>Method</label>
                <input 
                    id='method'
                    value={coffee.method}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Type/Method of Product'
                    required
                />

                <label htmlFor='url'>Image URL of Product</label>
                <input 
                    id='url'
                    value={coffee.url}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='https://image-of-url.png'
                    required
                />

                <label htmlFor='alt'>Caption for Picture</label>
                <input 
                    id='alt'
                    value={coffee.alt}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Caption'
                />

                <button type='submit'>Submit</button>
            </form>

            <Link to={`/coffees/${id}`}>
                <button>Cancel Edit</button>
            </Link>
        </div>
    );
};

export default withRouter(EditForm);
