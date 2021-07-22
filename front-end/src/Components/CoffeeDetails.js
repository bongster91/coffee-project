import React from 'react'
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import axios from "axios";

const API = apiURL();

const CoffeeDetails = ({ history, match }) => {
    const [details, setDetails] = useState([])
    const { id } = match.params

    console.log(id)
    useEffect(() => {
        axios.get(`${API}/coffees/${id}`)
                 .then((response) => {
                    setDetails(response.data)
                    console.log(details)
                 },
                 (error) => {
                     console.log(error);
                     history.push(`/not-found`);
                 }
                )
                .catch((c) => console.warn("catch", c))
    }, [id, history]);

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h5>{details.name}</h5>
            <h5></h5>
        </div>
    )
}

export default withRouter (CoffeeDetails);
