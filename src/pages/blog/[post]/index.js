import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";

import ImageSlider from "components/slider";

const SinglePost = ({ image, body, title, youtubeLink }) => {
  const [headingIndex, setHeadingIndex] = useState([]);

  useEffect(() => {
    filteredData();
  }, []);

  const filteredData = () => {
    try {
      for (let index = 0; index < body.length; index++) {
        const element = body[index];
        if (element.style === "h2") {
          setHeadingIndex((prev) => [...prev, index]);
        }
      }
    } catch (error) {}
  };

  const images = [
    {
      src: "/bg-1.jpg",
    },
    {
      src: "/bg-2.jpg",
      end: headingIndex[0],
    },
    {
      src: "/bg-3.jpg",
      start: headingIndex[0],
      end: headingIndex[1],
    },
    {
      src: "/bg-4.jpg",
      start: headingIndex[1],
      end: headingIndex[2],
    },
    {
      src: "/bg-5.jpg",
      start: headingIndex[2],
      end: headingIndex[3],
    },
    {
      src: "/bg-6.jpg",
      start: headingIndex[3],
      end: headingIndex[4],
    },
    {
      src: "/bg-6.jpg",
      start: headingIndex[4],
      end: headingIndex[5],
    },
    {
      src: "/bg-1.jpg",
      start: headingIndex[5],
      end: headingIndex[6],
    },
    {
      src: "/bg-2.jpg",
      start: headingIndex[6],
      end: headingIndex[7],
    },
    {
      src: "/bg-3.jpg",
      start: headingIndex[7],
      end: headingIndex[8],
    },
    {
      src: "/bg-4.jpg",
      start: headingIndex[8],
      end: headingIndex[9],
    },
    {
      src: "/bg-5.jpg",
      start: headingIndex[9],
      end: headingIndex[10],
    },
    {
      src: "/bg-6.jpg",
      start: headingIndex[10],
      end: headingIndex[11],
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
          images={images.slice(0, headingIndex.length + 3)}
          postImage={imageSrc}
          postBody={body}
          postTitle={title}
          postYoutubeLink={youtubeLink}
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
      youtubeLink: post.youtubeLink,
    };
  }
};

export default SinglePost;
