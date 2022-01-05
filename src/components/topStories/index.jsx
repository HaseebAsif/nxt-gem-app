import SectionHeader from "components/sectionHeading";
import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";

import SingleCard from "./singlecard";
import styles from "./topstories.module.css";

const TopStories = () => {
  const [topStoriesData, setTopStoriesData] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "post" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());

    setTopStoriesData(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
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
          {topStoriesData.slice(0, 3).map((prev, i) => {
            const { title, mainImage, body, slug } = prev;
            const imgBuilder = imageUrlBuilder({
              projectId: "cqnczxva",
              dataset: "production",
            });
            const image = imgBuilder.image(mainImage);
            return (
              <SingleCard
                key={i}
                index={i}
                Title={title}
                Image={image}
                styles={styles}
                body={body}
                currentSlug={slug.current}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopStories;
