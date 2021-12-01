import React, { useEffect } from "react";
import axios from "axios";
import { exercises } from "../Exercises";

const Glossary = () => {
  const [workout, setWorkout] = React.useState([]);

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
      <h1 style={{ textAlign: "center", fontSize: 50 }}>
        Exercise Descriptions
      </h1>
      {workout.map((info) => {
        console.log(info.description);
        return (
          <div>
            <h2>{info.name}</h2>
            {info.description.replace(/(<([^>]+)>)/gi, "")}
          </div>
        );
      })}

      {exercises.map((item) => {
        return (
          <div>
            <h2>{item.name}</h2>
            {item.description}
            <div>
              <img
                style={{ width: 300 }}
                src={item.image}
                alt="exercise-gif"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Glossary;
