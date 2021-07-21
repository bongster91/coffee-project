import React from "react";

const SingularCoffee = ({coffee}) => {
    return (
        <div>
            <div className="coffeeStyles">
                <h4>{coffee.name}</h4>
                <br />
                <p>{coffee.price}</p>
                <h5>{coffee.origin}</h5>
                <h5>{coffee.method}</h5>
            </div>
        </div>
    )
}

export default SingularCoffee;
