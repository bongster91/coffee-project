import React from "react";

const SingularCoffee = ({coffee}) => {
    return (
        <div>
            <div className="coffeeStyles">
                <h4>{coffee.name}</h4>
                <br />
                <p>{coffee.price}</p>
                <button>Details</button>
            </div>
        </div>
    )
}

export default SingularCoffee;
