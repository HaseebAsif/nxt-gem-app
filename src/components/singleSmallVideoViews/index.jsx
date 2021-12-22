import React from "react";
import ReactPlayer from "react-player";

import styles from "./singleSmallVideoViews.module.css";

const SingleSmallVideoViews = () => {
  return (
    <div
      className={`flex items-center justify-center mt-5 ${styles.single_small_video_views}`}
    >
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </div>
  );
};

export default SingleSmallVideoViews;
