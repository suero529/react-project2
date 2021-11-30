import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { exercises } from "../Exercises";
import Emoji from "react-emoji-render";

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
  // }, [value]);

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
      <div className="api-box">
        <h1>Some Ideas to Get You Started!</h1>
        <h3>Exercises that require weights:</h3>
        {workout.map((info) => {
          return (
            <div>
              <Link className="link" to="/glossary">
                {info.name}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="weightless-exercise-box">
        <h3>Exercises that require just you-- and your energy! ;)</h3>

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
    </div>
  );
};

export default Generator;
