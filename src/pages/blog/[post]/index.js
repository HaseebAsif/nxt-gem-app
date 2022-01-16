import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import SanityBlockContent from "@sanity/block-content-to-react";

import ImageSlider from "components/slider";

const images = [
  "https://source.unsplash.com/WLUHO9A_xik/1600x900",
  "https://source.unsplash.com/WLUHO9A_xik/1600x900",
  "https://source.unsplash.com/wQLAGv4_OYs/1600x900",
  "https://source.unsplash.com/WLUHO9A_xik/1600x900",
  "https://source.unsplash.com/WLUHO9A_xik/1600x900",
  "https://source.unsplash.com/WLUHO9A_xik/1600x900",
];
const SinglePost = ({ image, body, title }) => {
  return (
    <>
      <div>
        <ImageSlider images={images}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <h1>React.js Image Slider</h1>
            <p>Nulla vitae elit libero, a pharetra augue.</p>
          </div>
        </ImageSlider>
      </div>
    </>
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
