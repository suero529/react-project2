import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { exercises } from "../Exercises";
import { Emojione } from "react-emoji-render";

const Generator = (props) => {
  const [workout, setWorkout] = React.useState([]);

  // const [value, setValue] = React.useState([]);

  // useEffect(() => {}, [value]);
  // const filterExercise = (type) => {
  //   setValue(
  //     value.filter((exercise) => {
  //       return exercise.type === 'Cardio'
  //     })
  //   )
  // }

  //   let newArr = [...value];
  //   newArr = newArr.filter((exercise) => {
  //     return exercise.type === "Cardio";
  //   });
  //   setValue(newArr);
  // }, []);

  useEffect(() => {
    axios
      .get("https://wger.de/api/v2/exercise/")
      .then((info) => {
        console.log(info);
        let english = info.data.results.filter((workout) => {
          return workout.language === 2;
        });
        setWorkout(english);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  return (
    <div>
      <Emojione style={{ fontSize: 30 }} text="❤️ :+1: :) :joy:" />
      <h1>Some Ideas to Get You Started!</h1>
      <div className="api-box">
        <h3>Exercises that require weights:</h3>
        {workout.map((info) => {
          return (
            <div className="api-exercises">
              <Link className="link" to="/glossary">
                <p style={{ color: "dodgerblue" }}>{info.name}</p>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="weightless-exercise-box">
        <h3>
          Exercises that require just you-- and your energy!
          <Emojione style={{ fontSize: 30 }} text=";)" />
        </h3>

        {exercises.map((item) => {
          return (
            <div>
              <Link className="link" to="/glossary">
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="workout-filter">
        <h4>Choose Workout Type for the Day:</h4>
        <select>
          <option value=""></option>
          <option value="">Cardio</option>
          <option value="">Legs</option>
          <option value="">Core</option>
          <option value="">Arms</option>
        </select>
      </div>
    </div>
  );
};

export default Generator;
