import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo-cnt">
          <h1 id="logo">Movie info</h1>
        </div>
      </Link>
      <ul>
      <Link to="/trend">
          <li>Trend</li>
        </Link>
        <Link to="/favorite">
          <li>Favorite</li>
        </Link>
      </ul>
    </div>
  );
}