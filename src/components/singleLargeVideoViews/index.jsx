import React from "react";
import ReactPlayer from "react-player";

import styles from "./singleLargeVideoViews.module.css";

const SingleLargeVideoViews = ({ videoUrl, handleClick, autoPlay }) => {
  return (
    <div
      className={`flex items-center justify-center mt-5 ${styles.single_large_video_views}`}
    >
      <ReactPlayer
        url={videoUrl}
        onPlay={handleClick}
        playing={autoPlay ? true : false}
      />
    </div>
  );
};
SingleLargeVideoViews.defaultProps = {
  autoPlay: true,
};
export default SingleLargeVideoViews;
