import React from 'react'
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import axios from "axios";

const API = apiURL();

const CoffeeDetails = ({ history, match }) => {
    const [ details, setDetails ] = useState([])
    const { id } = match.params

    useEffect(() => {
        axios.get(`${API}/coffees/${id}`)
                 .then((response) => {
                    setDetails(response.data)
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
           <img src={details.url} alt={details.alt}/>

            <h5 style={{fontSize: "20px"}}>{details.name}</h5>
            <h5>{details.price}</h5>

            <Link to='/coffees'>
                <button>Back</button>
            </Link>

            <Link to={`/coffees/${id}/edit`}>
                <button>Edit {details.name}</button>
            </Link>

            <button onClick={handleDelete}>Delete {details.name}</button>
        </div>
    )
}

export default withRouter (CoffeeDetails);
