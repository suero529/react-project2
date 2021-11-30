import React from "react";
import CreateExercise from "./CreateExercise";
import ShowList from "./ShowList";
import Generator from "./Generator";

import { exercises } from "../Exercises";

const Main = () => {
  const [newText, setNewText] = React.useState(exercises);
  const [value, setValue] = React.useState(exercises);
  const [searchText, setSearchText] = React.useState("");

  const searchforExercise = () => {
    let sanitizedText = searchText.toLowerCase();
    let newArr = [...newText];
    newArr = newArr.filter((exercise) => {
      return exercise.name.toLowerCase().includes(sanitizedText);
    });
    setNewText(newArr);
  };

  const removeExercise = (name) => {
    let newArr = [...newText];
    newArr = newArr.filter((item) => {
      return item.name !== name;
    });
    setNewText(newArr);
    if (newArr === []) {
      alert("Great job! How did you feel today?");
    }
  };

  const addExercise = (newExercise) => {
    let newArr = [...newText];
    newArr.push(newExercise);
    setNewText(newArr);
  };

  const filterExercise = (type) => {
    let newArr = [...value];
    newArr = newArr.filter((exercise) => {
      return exercise.type === "Cardio";
    });
    setValue(newArr);
  };

  return (
    <div>
      <div className="search-bar">
        <h2>Search for Exercise</h2>
        <input
          name="search"
          placeholder="search exercises"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button onClick={searchforExercise}>Go</button>
      </div>

      <ShowList exercises={newText} delete={removeExercise} />
      <CreateExercise addExercise={addExercise} />
      <Generator exercises={newText} filterExercise={filterExercise} />
    </div>
  );
};

export default Main;
