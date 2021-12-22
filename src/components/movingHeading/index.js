import React from "react";
import Slide from "react-reveal/Slide";

const MovingHeading = () => {
  return (
    <>
      <div className="SkillsContainer bg-white">
        <div className="SC-Slider">
          <Slide bottom cascade>
            <div className="SC-Slide">
              <img src={'./assets/Picture-Assets/Top-1.jpg'} />
              <h1 className="text-5xl px-4">ONE OF THE LARGEST PLAY-TO-EARN</h1>
            </div>
          </Slide>  
        </div>
      </div>
    </>
  );
};

export default MovingHeading;
