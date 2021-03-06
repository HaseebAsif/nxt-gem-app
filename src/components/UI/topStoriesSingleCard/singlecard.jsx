import React, { useState } from "react";

// IMPORTING TILT
import Tilt from "react-tilt";

import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";
import Link from "next/link";

const SingleCard = ({ Title, Image, index, styles, body, currentSlug }) => {
  const router = useRouter();
  return (
    <>
      <div className={`mx-4 mb-5 ${styles.SingleProjectQ}`}>
        <Fade left>
          <Tilt className="Tilt" options={{ max: 25, scale: 1.02 }}>
            <div className={styles.singlePContainer}>
              <img src={Image} alt="" />
              <div
                className={`${styles.singlePContainerBody} ${
                  (index === 0 && "firstProject") || ""
                }`}
              >
                <div className="w-[400px]">
                  <h1 className="text-white text-lg line-clamp-2"> {Title} </h1>
                </div>
                <div className={styles.wrapper}>
                  <div>
                    <Link href={`/blog/${currentSlug}`}>
                      <div>
                        <span>Read More</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </Fade>
      </div>
    </>
  );
};

export default SingleCard;
