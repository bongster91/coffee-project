import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/products">
        <h3>Collection</h3>
      </Link>
      <Link>
        <h3>About</h3>
      </Link>
    </nav>
  );
}
