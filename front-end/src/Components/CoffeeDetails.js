import React from 'react'
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import axios from "axios";

const API = apiURL();

const CoffeeDetails = ({ history, match }) => {
    return (
        <div>
            <h5></h5>
            <h5></h5>
        </div>
    )
}

export default withRouter (CoffeeDetails);
