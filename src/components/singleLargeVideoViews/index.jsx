import React from "react";
import ReactPlayer from "react-player";

import styles from "./singleLargeVideoViews.module.css";

const SingleLargeVideoViews = () => {
  return (
    <div
      className={`flex items-center justify-center mt-5 shadow-xl ${styles.single_large_video_views}`}
    >
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </div>
  );
};

export default SingleLargeVideoViews;
