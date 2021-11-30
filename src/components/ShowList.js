import React from "react";
import { Emojione } from "react-emoji-render";

const ShowList = (props) => {
  return (
    <div>
      <div className="exercise-list-box">
        <h1>Exercise List:</h1>
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

      <Emojione style={{ fontSize: 30 }} text="❤️ :+1: :) :joy:" />
    </div>
  );
};

export default ShowList;
