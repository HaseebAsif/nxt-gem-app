import React, { useState } from "react";

import styles from "./scrollToTop.module.css";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <div className={styles.scrolltotop_div}>
      <i
        className={`fas fa-chevron-circle-up mr-2 md:mr-10 ${
          showScroll ? styles.scrollTop : "hidden"
        }`}
        onClick={scrollTop}
      ></i>
    </div>
  );
};

export default ScrollToTop;
