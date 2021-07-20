import React from "react";
import "./NavBar.css";



export default function NavBar() {
    return (
        <nav>
            <ul className="navList">
                <li className="items">JavaScript</li>
                <li className="items">Collection</li>
                <li className="items">About</li>
            </ul>
                <button className="btn">BTN</button>
        </nav>
    )
}
