import React from "react";
import ReactPlayer from "react-player";

import styles from "./singleLargeVideoViews.module.css";

const SingleLargeVideoViews = ({ videoUrl, handleClick }) => {
  return (
    <div
      className={`flex items-center justify-center mt-5 ${styles.single_large_video_views}`}
    >
      <ReactPlayer url={videoUrl} onPlay={handleClick} playing />
    </div>
  );
};

export default SingleLargeVideoViews;
