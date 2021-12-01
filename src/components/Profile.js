import React from "react";
import { Emojione } from "react-emoji-render";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Profile = (props) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [favCardio, setFavCardio] = React.useState("");

  const [showText, setShowText] = React.useState(false);
  const handleMouseEnter = (e) => {
    e.target.style.background = "floralwhite";
    setShowText(true);
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "none";
    setShowText(false);
  };

  const buttonMouseEnter = (e) => {
    e.target.style.background = "sandybrown";
  };
  const buttonMouseLeave = (e) => {
    e.target.style.background = "navajowhite";
  };

  return (
    <div className="page-box">
      <div className="user-form-box">
        <form className="user-form">
          <label>First Name : </label>
          <input
            name="firstName"
            placeholder="First Name"
            value={firstName}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>

          <label>Last Name : </label>
          <input
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          ></input>

          <label>Email : </label>
          <input
            name="email"
            placeholder="Email"
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label>Please select which gender we should use : </label>
          <div className="gender-box">
            <label>
              <input
                name="gender"
                placeholder="Select gender"
                value={gender}
                type="radio"
                onClick={(e) => setGender(e.target.value)}
              ></input>
              Female
            </label>
            <label>
              <input
                name="gender"
                placeholder="Select gender"
                value={gender}
                type="radio"
                onClick={(e) => setGender(e.target.value)}
              ></input>
              Male
            </label>
          </div>
          <label
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ color: "orangered", fontStyle: "italic" }}
          >
            <Emojione style={{ fontSize: 15 }} text=":question:" />
            Which one should I choose?
          </label>
          {showText && (
            <div className="hover-message-box">
              <p
                className="hover-message"
                style={{
                  backgroundColor: "floralwhite",
                  fontStyle: "italic",
                }}
              >
                Female and male sex hormones affect metabolism. We calculate
                calorie needs and energy expenditures differently depending on
                the gender you select. If your gender identity is not the same
                as your gender assigned at birth and you have not started
                gender-affirming medications, please select your gender assigned
                at birth (this will most accurately reflect your metabolic
                rate). If you have started taking gender-affirming medications,
                please first consult with your doctor what might be the best
                selection for you.
              </p>
            </div>
          )}

          <label>Activity level : </label>
          <select>
            <option placeholder="Select one"></option>
            <option>I'm a proud couch potato</option>
            <option>I walk my dog and stuff</option>
            <option>Yep I workout</option>
            <option>I'm a gym rat!</option>
          </select>

          <label>Favorite Cardio Activity : </label>
          <textarea
            style={{ width: 235 }}
            name="favCardio"
            placeholder="What gets your heart rate up?"
            value={favCardio}
            onChange={(e) => setFavCardio(e.target.value)}
          ></textarea>
        </form>
      </div>
      <div className="new-window">
        <Popup
          trigger={
            <button
              className="activity-button"
              onMouseEnter={buttonMouseEnter}
              onMouseLeave={buttonMouseLeave}
              style={{ fontSize: 14 }}
            >
              If you aren't sure about your activity level, click HERE!
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button
                className="close-button"
                onClick={close}
                style={{ float: "right" }}
              >
                &times;
              </button>
              <div className="activiy-lvl-table">
                <h1 style={{ textAlign: "center" }}>
                  Activity Levels Explained
                  <Emojione text=":sparkles:" />
                </h1>
                <table style={{ width: 720 }}>
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "mistyrose" }}>
                        <h3>Sedentary</h3>
                        <p style={{ fontSize: 14 }}>
                          (I'm a proud couch potato)
                        </p>
                      </th>
                      <th style={{ backgroundColor: "cornsilk" }}>
                        <h3>Lightly Active</h3>
                        <p style={{ fontSize: 14 }}>
                          (I walk my dog and stuff)
                        </p>
                      </th>
                      <th style={{ backgroundColor: "rgb(234 255 191)" }}>
                        <h3>Active</h3>
                        <p style={{ fontSize: 14 }}>(Yep I workout)</p>
                      </th>
                      <th style={{ backgroundColor: "honeydew" }}>
                        <h3>Very Active</h3>
                        <p style={{ fontSize: 14 }}>(I'm a gym rat!)</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: "mistyrose" }}>
                        <ul>
                          <li>Little or no exercise</li>
                          <li>Mostly sitting</li>
                          <li>Minimal movement (i.e. desk job)</li>
                        </ul>
                      </td>
                      <td style={{ backgroundColor: "cornsilk" }}>
                        <ul>
                          <li>
                            Intentional exercise every day for at least 30
                            minutes
                          </li>
                          <li>Light exercise/sports 1-3 days/week</li>
                        </ul>
                      </td>
                      <td style={{ backgroundColor: "rgb(234 255 191)" }}>
                        <ul>
                          <li>
                            Intentional exercise every day for 45 min - hour
                          </li>
                          <li>Moderate exercise/sports 3-5 days/week</li>
                        </ul>
                      </td>
                      <td style={{ backgroundColor: "honeydew" }}>
                        <ul>
                          <li>Intentional exercise every day</li>
                          <li>
                            Vigorous activities/workouts for an extended period
                            of time (i.e. long distance running)
                          </li>
                          <li>Hard exercise/sports 6-7 days/week</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default Profile;
