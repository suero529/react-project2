import React from "react";

const CreateExercise = (props) => {
  const [text, setText] = React.useState("");

  const createNewExercise = () => {
    const newExercise = { name: text };
    props.addExercise(newExercise);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="add-own">
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 15 }}
        >
          <input
            style={{ width: 192 }}
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Enter Exercise"
          ></input>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ width: 200 }} onClick={createNewExercise}>
            Add Your Own
          </button>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 15 }}
        >
          <img
            style={{ width: 200, height: 200 }}
            src="https://c.tenor.com/1xBPtdC3gA8AAAAC/kakao-exercise.gif"
            alt="active-dude"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default CreateExercise;
