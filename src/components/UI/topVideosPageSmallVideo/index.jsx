import React from "react";
import ReactPlayer from "react-player";
import styles from "./topVideosPageSmallVideo.module.css";

const CustomIcon = () => (
  <div className="relative bottom-[34%] left-[38%] bg-black text-white rounded-full border border-white h-6 w-6  grid place-items-center">
    <i className="fas fa-play text-[6px]"></i>
  </div>
);

const TopVideosPageSmallVideo = ({ videoUrl, handleClick, autoPlay }) => {
  return (
    <div className={`flex ${styles.TopVideosPageSmallVideo} justify-center`}>
      <ReactPlayer
        url={videoUrl}
        playIcon={<CustomIcon />}
        light="https://images.unsplash.com/photo-1517332953775-0fecf924e8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRhcmslMjBwbGF5ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        playing
      />
    </div>
  );
};
TopVideosPageSmallVideo.defaultProps = {
  autoPlay: true,
};
export default TopVideosPageSmallVideo;
