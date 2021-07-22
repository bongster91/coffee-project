import React from "react";
import { Link } from "react-router-dom";

const SingularCoffee = ({coffee}) => {
    return (
        <div>
            <div className="coffeeStyles">
                <h4>{coffee.name}</h4>

                <br />

                <p>{coffee.price}</p>

                <Link to={`/coffees/${coffee.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    )
}

export default SingularCoffee;
