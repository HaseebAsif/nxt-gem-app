import React from "react";
import styles from "./blogTitleDesign.module.css";

const BlogTitleDesign = ({ title, date, author }) => {
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const datePosted = new Date(date).toLocaleString("en-us", dateOptions);
  return (
    <div className="overflow-hidden">
      <div
        className={` w-fit bg-[#023844] mt-[82px] -skew-x-[48deg] before:skew-x-[42deg] ${styles.blogTitlePage}`}
      >
        <div className={`py-2 px-2 lg:px-6 ${styles.blogText}`}>
          <h2>{title}</h2>
          <div className="flex justify-between items-end w-11/12">
            <div className="w-fit">
              <h3 className="text-sm lg:text-lg w-fit">
                <span className="text-gray-400">Date Published:</span>{" "}
                {datePosted}
              </h3>
              <h3 className="text-sm lg:text-lg w-fit">
                <span className="text-gray-400"> Author:</span> {author.name}
              </h3>
            </div>
            <div className="flex">
              <div className="flex items-center justify-center">
                <img src="/Views.png" className="w-9 mr-2" alt="" /> Icon here
              </div>
              <div className="flex items-center justify-center">
                <img src="/Likes.png" className="w-7 mx-2" alt="" /> Icon here
              </div>
              <div className="flex items-center justify-center">
                <img src="/Share.png" className="w-6 ml-2" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitleDesign;
