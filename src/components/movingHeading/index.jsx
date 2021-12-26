import React from "react";
import Slide from "react-reveal/Slide";

import styles from "./movingHeading.module.css";

const MovingHeading = ({ heading }) => {
  return (
    <>
      <div className={styles.SkillsContainer}>
        <div className={styles.SC_Slider}>
          <img
            src="/assets/Top-Stories-Assets/Top-Stories-1.jpg"
            className="absolute w-1/4 h-full left-0 z-50 object-contain skew-x-12 md:w-max"
          />
          <Slide bottom cascade>
            <div className={styles.SC_Slide}>
              <h1 className="text-xl w-max px-4 md:text-4xl text-white">
                {heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              {/* <img src={"./assets/Picture-Assets/Top-1.jpg"} /> */}
              <h1 className="text-xl w-max px-4 md:text-4xl text-white">
                {heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              {/* <img src={"./assets/Picture-Assets/Top-1.jpg"} /> */}
              <h1 className="text-xl w-max px-4 md:text-4xl text-white">
                {heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              {/* <img src={"./assets/Picture-Assets/Top-1.jpg"} /> */}
              <h1 className="text-xl w-max px-4 md:text-4xl text-white">
                {heading}
              </h1>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default MovingHeading;
