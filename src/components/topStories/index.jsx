import SectionHeader from "components/sectionHeading";
import React, { useEffect, useState } from "react";

import SingleCard from "./singlecard";
import styles from "./topstories.module.css";

const TopStories = () => {
  const [topStoriesData, settopStoriesData] = useState([]);
  useEffect(() => {
    fetch("/api/topstories")
      .then((response) => response.json())
      .then((data) => settopStoriesData(data));
  }, []);
  return (
    <div
      id="Projects"
      className={`mb-24 sm:mb-10 ${styles.TopStoriesContainer}`}
    >
      <div className={`${styles.container_top_stories} mt-16`}>
        <div className="animate-fadeIn">
          <SectionHeader heading="Top Stories" value="3" />
        </div>
        <div
          className={`flex flex-wrap items-center justify-center overflow-hidden ${styles.sibling_fade}`}
        >
          {topStoriesData.map((prev, i) => {
            const { title, img } = prev;
            return (
              <SingleCard
                key={i}
                index={i}
                Title={title}
                Image={img}
                styles={styles}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopStories;
