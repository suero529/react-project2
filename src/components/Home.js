import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="app-name">Citric Circuit</h1>
      <h1 style={{ textAlign: "center" }} className="tagline">
        Welcome to your fitness journey!
      </h1>
      <div className="home-big-box">
        <div className="home-blurb-box">
          <div className="home-blurb">
            <p>
              Many of us aspire to improve our health and fitness. While having
              specific health and fitness goals in mind is excellent, people
              often go to extremes to accomplish these goals. The newest fad
              diets and workout trends often end up exhausting mental and
              physical energy.
            </p>
            <p>
              This usually leads to either quitting altogether or reaching these
              goals and being unable to maintain them, ultimately resulting in
              burnout, failure, or injury—but it doesn’t have to be this way!
            </p>
            <p>
              When you start to view health and fitness as a lifestyle rather
              than a part-time hobby or a single 30-day challenge, you develop
              behaviors that will improve many areas of your life.
            </p>
            <p>
              Living a healthy lifestyle can inspire creativity and teach you
              discipline, adaptability, and balance. This will not only leave
              you looking and feeling better, but you will also show up as a
              better version of yourself for the people in your life that truly
              matter.
            </p>
            <p>So let's start today with Citric Circuit!</p>
            <br />
            <p>
              ...and remember to always supplement your activities with a
              healthy diet!
            </p>
          </div>
          <div className="dancing-broccoli-box">
            <img
              className="dancing-broccoli"
              src="https://cdn.dribbble.com/users/948184/screenshots/7798456/media/14fa865a554e86f90d499834af7f1d32.gif"
              alt="dancing broccoli"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Home Screen
