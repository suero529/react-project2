import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="Nav">
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="link" to="/main">
              Main
            </Link>
          </li>
          <li>
            <Link className="link" to="/glossary">
              Glossary
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
