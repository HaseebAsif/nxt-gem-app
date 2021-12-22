import SectionHeader from "components/sectionHeading";
import React from "react";

import { states } from "../data/topstoriesdata";
import SinglwCard from "./singlecard";
import styles from "./topstories.module.css";

const TopStories = () => {
  return (
    <>
      <div id="Projects" className={styles.TopStoriesContainer}>
        <div className={`${styles.container_top_stories} mt-16`}>
          <SectionHeader heading="Top Stories" />
          <div
            className={`flex flex-wrap items-center justify-center ${styles.sibling_fade}`}
          >
            {states.projects.map((prev, i) => {
              const { title, img } = prev;
              return (
                <SinglwCard
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
    </>
  );
};

export default TopStories;
