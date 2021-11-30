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
        <br />
        <p>...and remember to supplement your workouts with a healthy diet!</p>
        <img
          className="dancing-broccoli"
          src="https://cdn.dribbble.com/users/948184/screenshots/7798456/media/14fa865a554e86f90d499834af7f1d32.gif"
          alt="dancing broccoli"
        />
      </div>
      <Link className="link" to="/main">
        <button>Time to plan it out!</button>
      </Link>
    </div>
  );
};

export default About;
