import React from "react";
import Slide from "react-reveal/Slide";

const MovingHeading = () => {
  return (
    <>
      <div className="SkillsContainer">
        <div className="SC-Slider">
          <img
            src="/assets/Picture-Assets/Top-1.jpg"
            className="absolute w-1/4 h-full left-0 z-50 object-contain md:w-max"
          />
          <Slide bottom cascade>
            <div className="SC-Slide">
              <h1 className="text-xl w-max px-4 md:text-5xl text-white">
                ONE OF THE LARGEST PLAY-TO-EARN
              </h1>
            </div>
            <div className="SC-Slide">
              {/* <img src={"./assets/Picture-Assets/Top-1.jpg"} /> */}
              <h1 className="text-xl w-max px-4 md:text-5xl text-white">
                ONE OF THE LARGEST PLAY-TO-EARN
              </h1>
            </div>
            <div className="SC-Slide">
              {/* <img src={"./assets/Picture-Assets/Top-1.jpg"} /> */}
              <h1 className="text-xl w-max px-4 md:text-5xl text-white">
                ONE OF THE LARGEST PLAY-TO-EARN
              </h1>
            </div>
            <div className="SC-Slide">
              {/* <img src={"./assets/Picture-Assets/Top-1.jpg"} /> */}
              <h1 className="text-xl w-max px-4 md:text-5xl text-white">
                ONE OF THE LARGEST PLAY-TO-EARN
              </h1>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default MovingHeading;
