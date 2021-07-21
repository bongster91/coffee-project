import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";

import SingularCoffee from "../Components/SingularCoffee";

const API = apiURL();

export default function CoffeesComponent() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/coffees`)
      .then(
        (response) => setCoffees(response.data),
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div>
      <ul>
        {coffees.map((coffee) => {
          <li
            key={coffee.id}>
              <SingularCoffee
                coffee={coffee}
            />
          </li>
})}
      </ul>
    </div>
  );
}
