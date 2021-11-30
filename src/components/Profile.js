import React from "react";
import { Emojione } from "react-emoji-render";

const Profile = (props) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [activityLvl, setActivityLvl] = React.useState("");
  const [favCardio, setFavCardio] = React.useState("");
  const [hobbies, setHobbies] = React.useState("");
  const [favoriteColor, setFavoriteColor] = React.useState("");

  const [showText, setShowText] = React.useState(false);
  const handleMouseEnter = (e) => {
    e.target.style.background = "floralwhite";
    setShowText(true);
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "none";
    setShowText(false);
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

          <label>Baseline activity level : </label>
          <input
            name="activityLvl"
            placeholder="How active are you?"
            value={activityLvl}
            type="text"
            onChange={(e) => setActivityLvl(e.target.value)}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Profile;
