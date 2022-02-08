import React from "react";
import styles from "./blogTitleDesign.module.css";

const BlogTitleDesign = ({ title, date, author }) => {
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
                {date.slice(0, 10)}
              </h3>
              <h3 className="text-sm lg:text-lg w-fit">
                <span className="text-gray-400"> Author:</span> {author.name}
              </h3>
            </div>
            {/* <div>Icon here</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitleDesign;
