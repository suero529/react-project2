import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="app-name">Citric Circuit</h1>
      <h3 className="tagline">Welcome to your fitness journey!</h3>
      <Link className="link" to="/about">
        <button>Let's get started!</button>
      </Link>
    </div>
  );
};

export default Home;

// Home Screen
