import useSlider from "hooks/useSlider";
import React, { useRef, useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import SanityBlockContent from "@sanity/block-content-to-react";

import styles from "./post.module.css";

const SinglePost = ({ image, body, title }) => {
  const [imageUrl, setImageUrl] = useState("");
  const slideImage = useRef(null);
  const slideText = useRef(null);

  const images = [
    {
      src: imageUrl,
      text: body && <SanityBlockContent blocks={body} />,
    },
    {
      src: imageUrl,
      text: "Consectetur adipisicing elit cillum dolore eu fugiat nulla",
    },
    {
      src: imageUrl,
      text: "Asperiores ex animi explicabo cillum dolore eu fugiat nulla",
    },
  ];

  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    images
  );

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "cqnczxva",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);
  return (
    <div className={styles.slider} ref={slideImage}>
      <div className={styles.slider__content}>
        <button onClick={goToPreviousSlide} className={styles.slider__btn_left}>
          <i className="fas fa-angle-left"></i>
        </button>
        <div className={styles.slider__feature}>
          <h1 className={styles.feature__title}>Dreaming</h1>
          <p ref={slideText} className={styles.feature__text}></p>
          <button className={styles.feature__btn}>Get started</button>
        </div>
        <button onClick={goToNextSlide} className={styles.slider__btn_right}>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

SinglePost.getInitialProps = async (pageContext) => {
  const pageSlug = pageContext.query.post;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      title: post.title,
      body: post.body,
      image: post.mainImage,
    };
  }
};

export default SinglePost;
