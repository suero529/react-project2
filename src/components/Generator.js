import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { exercises } from "../Exercises";
import { Emojione } from "react-emoji-render";

const Generator = (props) => {
  const [workout, setWorkout] = React.useState([]);

  const [text, setText] = React.useState("");

  const createNewExercise = () => {
    const newExercise = { name: text };
    props.addExercise(newExercise);
  };

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
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 100,
          color: "sandybrown",
        }}
      >
        Some Ideas to Get You Started!
      </h1>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 100 }}
      >
        <div className="api-box">
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 30,
              fontSize: 22,
            }}
          >
            Exercises that require weights:
          </h3>
          {workout.map((info) => {
            return (
              <div
                style={{
                  marginLeft: 120,
                  marginTop: 30,
                  marginBottom: 30,
                  lineHeight: 4,
                }}
                className="api-exercises"
              >
                <Link className="link" to="/glossary">
                  <p style={{ color: "dodgerblue" }}>{info.name}</p>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="weightless-exercise-box">
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 30,
              fontSize: 22,
            }}
          >
            Exercises that require just you--
          </h3>{" "}
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 30,
              fontSize: 22,
            }}
          >
            and your energy!
            <Emojione style={{ fontSize: 30 }} text=";)" />
          </h3>
          <div
            style={{
              marginLeft: 220,
              marginTop: 30,
              marginBottom: 30,
              lineHeight: 4,
            }}
          >
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
      </div>
    </div>
  );
};

export default Generator;
