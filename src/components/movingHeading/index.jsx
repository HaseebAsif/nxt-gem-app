import React from "react";
import Slide from "react-reveal/Slide";

import styles from "./movingHeading.module.css";

const MovingHeading = ({ heading }) => {
  return (
    <>
      <div className={styles.SkillsContainer}>
        <div className={styles.SC_Slider}>
          <a href="https://astraguild.io/" target="_blank">
            <img
              src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_248/v1640600232/movingHeadingImage_v5c8wd.png"
              className="absolute w-1/4 h-full left-0 bottom-0 z-50 object-contain md:w-max"
            />
          </a>
          <Slide bottom cascade>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
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
