import React from "react";
import ReactPlayer from "react-player";

import styles from "./singleLargeVideoViews.module.css";

const SingleLargeVideoViews = ({ videoUrl }) => {
  return (
    <div
      className={`flex items-center justify-center mt-5 shadow-xl ${styles.single_large_video_views}`}
    >
      <ReactPlayer url={videoUrl} />
    </div>
  );
};

export default SingleLargeVideoViews;
