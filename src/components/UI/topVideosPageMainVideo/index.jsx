import React from "react";
import ReactPlayer from "react-player";
import styles from "./topVideosPageMainVideo.module.css";

const CustomIcon = () => (
  <div className="relative bottom-[40%] left-[42%] bg-black text-white rounded-full border border-white h-6 md:h-12 w-6 md:w-12 grid place-items-center">
    <i className="fas fa-play text-[6px] lg:text-[14px]"></i>
  </div>
);

const TopVideosPageMainVideo = ({ videoUrl, image, handleClick, autoPlay }) => {
  return (
    <div className={`flex ${styles.TopVideosPageMainVideo} justify-center`}>
      <ReactPlayer
        url={videoUrl}
        playIcon={<CustomIcon />}
        light={
          image &&
          "https://images.unsplash.com/photo-1517332953775-0fecf924e8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRhcmslMjBwbGF5ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
        playing
        onPlay={handleClick}
      />
    </div>
  );
};
TopVideosPageMainVideo.defaultProps = {
  autoPlay: true,
};
export default TopVideosPageMainVideo;
