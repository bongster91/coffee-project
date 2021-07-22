import React from 'react'
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import axios from "axios";

const API = apiURL();

const CoffeeDetails = ({ history, match }) => {
    const [ coffee, setCoffee ] = useState([])
    const { id } = match.params

    useEffect(() => {
        axios.get(`${API}/coffees/${id}`)
                 .then((response) => {
                    setCoffee(response.data)
                 },
                 (error) => {
                     console.log(error);
                     history.push(`/not-found`);
                 }
                )
                .catch((c) => console.warn("catch", c))
    }, [id, history]);

    const handleDelete = async () => {
        await axios
            .delete(`${API}/coffees/${id}`)
            .then(
                () => history.push('/coffees'),
                (error) => console.warn(error)
            )
            .catch(
                (c) => console.error(c)
            );
    };


    return (
        <div className="singular-index">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
           <img src={coffee.url} alt={coffee.alt} />


            <h1>
                {coffee.name}
            </h1>
            <h3>{coffee.price}</h3>
            <h3>{coffee.method}</h3>
            <h3>{coffee.origin}</h3>



            <Link to='/coffees'>
                <button>Back</button>
            </Link>

            <Link to={`/coffees/${id}/edit`}>
                <button>Edit {coffee.name}</button>
            </Link>

            <button onClick={handleDelete}>Delete {coffee.name}</button>
        </div>
    )
}

export default withRouter (CoffeeDetails);
