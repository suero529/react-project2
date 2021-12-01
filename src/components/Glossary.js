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
      <div className="big-box">
        {exercises.map((item) => {
          return (
            <div className="glossary-exercise-box">
              <h2 style={{ textAlign: "center" }}>{item.name}</h2>
              {item.description}
              <div className="exercise-gif-box">
                <img
                  className="exercise-gif"
                  style={{ width: 300 }}
                  src={item.image}
                  alt="exercise-gif"
                ></img>
              </div>
            </div>
          );
        })}
      </div>

      {/* <button>Click Here for More Exercise Definitions:</button> */}

      <div className="api-exercises-box">
        <h2 style={{ fontSize: 32, color: "sandybrown", textAlign: "center" }}>
          More Exercise Definitions:
        </h2>
        {workout.map((info) => {
          return (
            <div>
              <h2>{info.name}</h2>
              {info.description.replace(/(<([^>]+)>)/gi, "")}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Glossary;

// {apiExercisesImg.map((item) => {
//   return (
//     <div>
//       <img
//         style={{ width: 300 }}
//         src={item.image1}
//         alt="exercise-gif"
//       ></img>
//     </div>
//   );
// }
// })}
