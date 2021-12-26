import SectionHeader from "components/sectionHeading";
import React from "react";

import { topStoriesData } from "../data/topstoriesdata";
import SingleCard from "./singlecard";
import styles from "./topstories.module.css";

const TopStories = () => {
  return (
    <div
      id="Projects"
      className={`mb-24 sm:mb-48 ${styles.TopStoriesContainer}`}
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
