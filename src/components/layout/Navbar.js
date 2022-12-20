import { Link } from "react-router-dom";
import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <ul className="list">
      <li className="item">
        <Link to="/">Home</Link>
      </li>
      <li className="item">
        <Link to="/sobre">Sobre</Link>
      </li>
      <li className="item">
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  );
}

export default Navbar;
