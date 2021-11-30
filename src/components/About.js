import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Your Health and Wellness Starts with YOU!</h1>
      <div className="blurb-box">
        <p>Motivational blurb here</p>
        <p>Motivational blurb here</p>
        <p>Motivational blurb here</p>
        <p>Motivational blurb here</p>
        <p>Motivational blurb here</p>
        <p>Motivational blurb here</p>
        <p>Motivational blurb here</p>
        <p>Motivational blurb here</p>
        <p>Motivational blurb here</p>
        <p>Motivational blurb here</p>
      </div>
      <Link className="link" to="/main">
        <button>Time to plan it out!</button>
      </Link>
    </div>
  );
};

export default About;
