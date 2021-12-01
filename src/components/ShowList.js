import React from "react";
import { Emojione } from "react-emoji-render";

const ShowList = (props) => {
  return (
    <div className="exercise-list-big-box">
      <div className="exercise-list-box">
        <h1
          style={{
            textAlign: "center",
            color: "lightsalmon",
          }}
        >
          Exercise List:
        </h1>

        {props.exercises.map((item) => {
          return (
            <div>
              <ul>
                <li>{item.name}</li>
                <button onClick={() => props.delete(item.name)}>Done!</button>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowList;
