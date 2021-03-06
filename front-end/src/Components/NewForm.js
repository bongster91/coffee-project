import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { apiURL } from '../util/apiURL';
import axios from 'axios';
import coffeespoon from "../images/coffee-beans-ground-coffee-and-instant-coffee-in-2021-07-19-16-56-44-utc.svg";


const API = apiURL();

function NewForm({ history }) {
    const [ coffee, setCoffee ] = useState({
        name: '',
        price: 0.00,
        origin: '',
        method: '',
        url: '',
        alt: ''
    });

    const addCoffee = (newCoffee) => {
        axios
            .post(`${API}/coffees`, newCoffee)
            .then(
                () => history.push('/coffees'),
                (e) => console.error(e)
            )
            .catch(
                (c) => console.warn('catch', c)
            );
    };

    const handleTextChange = (e) => {
        setCoffee({ ...coffee, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCoffee(coffee);
    };

    return (
        // <div className="newform-container">
        //     <div className="new-form">
            <section>
                <div className="imgBx">
                    <img src={coffeespoon} alt="coffee-spoons" />
                <div className="contentBx">
                    <div className="formBx">
                        <div className="form">
                            <h1> Create Your Custom Coffee</h1>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withRouter(NewForm);
