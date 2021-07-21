import React from "react";

const SingularCoffee = ({coffee}) => {
    return (
        <div>
            <h4>{coffee.name}</h4>
            <h5>{coffee.price}</h5>
            <h5>{coffee.origin}</h5>
            <h5>{coffee.method}</h5>
        </div>
    )
}

export default SingularCoffee;
