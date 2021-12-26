import React from "react";
import ReactPlayer from "react-player";

import styles from "./singleSmallVideoViews.module.css";

const SingleSmallVideoViews = ({ videoUrl }) => {
  return (
    <div
      className={`flex items-center justify-center mt-5 mx-2 ${styles.single_small_video_views}`}
    >
      <ReactPlayer url={videoUrl} />
    </div>
  );
};

export default SingleSmallVideoViews;
