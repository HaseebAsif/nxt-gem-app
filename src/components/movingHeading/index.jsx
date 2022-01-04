import React, { useEffect, useState } from "react";
import Slide from "react-reveal/Slide";
import imageUrlBuilder from "@sanity/image-url";

import styles from "./movingHeading.module.css";

const MovingHeading = () => {
  const [MovingHeading, setMovingHeading] = useState({});
  const [image, setImage] = useState();

  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "movingHeading" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setMovingHeading(result.result[0]);
    const imgBuilder = imageUrlBuilder({
      projectId: "cqnczxva",
      dataset: "production",
    });
    const mainImage = await result.result[0].mainImage;
    setImage(imgBuilder.image(mainImage));
  }, []);
  return (
    <>
      <div className={styles.SkillsContainer}>
        <div className={styles.SC_Slider}>
          <a href={MovingHeading.link} target="_blank">
            {image !== undefined && (
              <img
                src={image}
                className="absolute w-1/4 h-full left-0 bottom-0 z-50 object-contain md:w-max"
              />
            )}
          </a>
          <Slide bottom cascade>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {MovingHeading.heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {MovingHeading.heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {MovingHeading.heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {MovingHeading.heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {MovingHeading.heading}
              </h1>
            </div>
            <div className={styles.SC_Slide}>
              <h1 className="tracking-widest text-xl w-max px-4 md:text-4xl text-white">
                {MovingHeading.heading}
              </h1>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default MovingHeading;
