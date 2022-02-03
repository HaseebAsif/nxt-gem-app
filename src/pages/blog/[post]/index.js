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
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_990/v1643114972/bg-1_zkq3mi.jpg",
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_990/v1643114972/bg-2_tyhf2i.jpg",
      end: headingIndex[0],
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_990/v1643114975/bg-3_ffg2fy.jpg",
      start: headingIndex[0],
      end: headingIndex[1],
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_728/v1643114976/bg-4_iy5gs5.jpg",
      start: headingIndex[1],
      end: headingIndex[2],
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_728/v1643114976/bg-4_iy5gs5.jpg",
      start: headingIndex[2],
      end: headingIndex[3],
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_1120/v1643114974/bg-6_ven2t5.jpg",
      start: headingIndex[3],
      end: headingIndex[4],
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_1120/v1643114974/bg-6_ven2t5.jpg",
      start: headingIndex[4],
      end: headingIndex[5],
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_924/v1643114972/bg-1_zkq3mi.jpg",
      start: headingIndex[5],
      end: headingIndex[6],
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_990/v1643114972/bg-2_tyhf2i.jpg",
      start: headingIndex[6],
      end: headingIndex[7],
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_990/v1643114975/bg-3_ffg2fy.jpg",
      start: headingIndex[7],
      end: headingIndex[8],
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_990/v1643114976/bg-4_iy5gs5.jpg",
      start: headingIndex[8],
      end: headingIndex[9],
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_990/v1643114976/bg-4_iy5gs5.jpg",
      start: headingIndex[9],
      end: headingIndex[10],
    },
    {
      src: "https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_990/v1643114974/bg-6_ven2t5.jpg",
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
          images={images.slice(0, headingIndex.length + 4)}
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
