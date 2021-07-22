import React from "react";
import { Link } from "react-router-dom";

const SingularCoffee = ({coffee}) => {
    return (
        <div>
            <div className="coffeeStyles">
                <h4>{coffee.name}</h4>

                <br />

                <p>{coffee.price}</p>

                <Link className="nav-link" to={`/coffees/${coffee.id}`}>
                    <button className="btn-deets">Details</button>
                </Link>
            </div>
        </div>
    )
}

export default SingularCoffee;
