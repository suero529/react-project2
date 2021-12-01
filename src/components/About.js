import React from "react";
import { Link } from "react-router-dom";
import { Emojione } from "react-emoji-render";

const About = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: 20 }}>
        Your Health and Wellness Starts with YOU!
      </h1>
      <p
        style={{
          textAlign: "center",
          paddingTop: 30,
          paddingLeft: 120,
          paddingRight: 120,
          lineHeight: 2,
        }}
      >
        This exercise tracker will help you get familiarized with different
        exercises (take a peek at the{" "}
        <Link className="link" to="/glossary">
          Glossary
        </Link>
        , it's ok if you don't know them all-- for now)! You are free to try any
        number of the exercises each day, but our suggestion is to structure the
        week with the following:
      </p>
      <br />
      <div className="week-table">
        <table style={{ width: 1350, backgroundColor: "floralwhite" }}>
          <thead>
            <tr>
              <th>
                <h2>Mon</h2>
                <p style={{ fontSize: 14 }}>(Leg Day)</p>
              </th>
              <th>
                <h2>Tue</h2>
                <p style={{ fontSize: 14 }}>(Light Intensity Cardio)</p>
              </th>
              <th>
                <h3>Wed</h3>
                <p style={{ fontSize: 14 }}>(Core Day)</p>
              </th>
              <th>
                <h2>Thur</h2>
                <p style={{ fontSize: 14 }}>(Light Intensity Cardio)</p>
              </th>
              <th style={{ width: 250 }}>
                <h2>Fri</h2>
                <p style={{ fontSize: 14 }}>(Arms Day)</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p style={{ padding: 20 }}>
                  A circuit of 3 exercises (2 sets of 10 reps each)
                </p>
              </td>
              <td>
                <p style={{ padding: 20 }}>
                  A light form of cardio that you enjoy for 30 min
                </p>
              </td>
              <td>
                <p style={{ padding: 20 }}>
                  A circuit of 3 exercises (2 sets of 10 reps each)
                </p>
              </td>
              <td>
                <p style={{ padding: 20 }}>
                  A light form of cardio that you enjoy for 30 min
                </p>
              </td>
              <td>
                <p style={{ padding: 20 }}>
                  A circuit of 3 exercises (2 sets of 10 reps each)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />

      <p
        style={{
          textAlign: "center",
          paddingTop: 10,
          paddingLeft: 120,
          paddingRight: 120,
          lineHeight: 2,
        }}
      >
        As you become more comfortable with your new workout regimen each week,
        gradually add more exercises to your circuit workout days. Saturdays can
        be designated for active recovery (i.e. stretches, restorative yoga,
        etc), and rest on Sunday fun day!{" "}
        <Emojione style={{ fontSize: 20 }} text=":heart:" />
      </p>
      <br />

      <div className="submit-box">
        <Link className="link" to="/profile">
          <button
            className="submit"
            style={{
              width: 160,
              height: 50,
              backgroundColor: "sandybrown",
              color: "cornflowerblue",
              marginTop: 25,
              marginBottom: 100,
            }}
          >
            Let's go sign up!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
