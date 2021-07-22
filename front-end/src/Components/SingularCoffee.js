import React from "react";
import { Link } from "react-router-dom";

const SingularCoffee = ({coffee}) => {
    return (
        <div className="container">
            <div className="card">
                <div className="face face1">
                    <div className="content">
                    <h4>{coffee.name}</h4>
                    </div>
                </div>

                <div className="face face2">
                    <div className="content">
                        <p>{coffee.method}</p>

                <Link className="nav-link" to={`/coffees/${coffee.id}`}>
                    <p>Details</p>
                    {/* <button className="btn-deets">Details</button> */}
                </Link>
                    </div>
                </div>
            </div>
            {/* <div className="coffeeStyles">
                <h4>{coffee.name}</h4>

                <br />

                <p>{coffee.method}</p>
                <p>{coffee.origin}</p>

                <Link className="nav-link" to={`/coffees/${coffee.id}`}>
                    <button className="btn-deets">Details</button>
                </Link>
            </div> */}
        </div>
    )
}

export default SingularCoffee;
