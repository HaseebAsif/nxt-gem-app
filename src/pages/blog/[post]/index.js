import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";

import ImageSlider from "components/slider";

const SinglePost = ({ image, body, title }) => {
  const images = [
    {
      src: "/bg-1.jpg",
      alt: "HelloWorld /bg-1.jpg",
    },
    {
      src: "/bg-2.jpg",
      alt: "HelloWorld /bg-2.jpg",
    },
    {
      src: "/bg-3.jpg",
      alt: "HelloWorld /bg-3.jpg",
    },
    {
      src: "/bg-4.jpg",
      alt: "HelloWorld /bg-4.jpg",
    },
    {
      src: "/bg-5.jpg",
      alt: "HelloWorld /bg-5.jpg",
    },
    {
      src: "/bg-6.jpg",
      alt: "HelloWorld /bg-6.jpg",
    },
  ];
  const imgBuilder = imageUrlBuilder({
    projectId: "cqnczxva",
    dataset: "production",
  });
  const imageSrc = imgBuilder.image(image);
  return (
    <>
      <div>
        <ImageSlider
          images={images}
          postImage={imageSrc}
          postBody={body}
          postTitle={title}
        />
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
