import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";

import BlogSlider from "components/blogSlider";
import SideIcons from "components/sideSocialIcons";

const SinglePost = ({ image, body, title, youtubeLink, post }) => {
  const [PostSlides, setPostSlides] = useState([]);

  const [images, setImages] = useState([]);

  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "slides" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());

    setPostSlides(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
  useEffect(() => {
    filteredData();
  }, [PostSlides]);
  const filteredData = () => {
    try {
      for (let index = 0; index < post.slides.length; index++) {
        const element = post.slides[index];
        for (let index = 0; index < PostSlides.length; index++) {
          const elementSlide = PostSlides[index];
          if (element._ref === elementSlide._id) {
            setImages((prev) => [...prev, PostSlides[index]]);
          }
        }
      }
    } catch (error) {}
  };

  const imgBuilder = imageUrlBuilder({
    projectId: "cqnczxva",
    dataset: "production",
  });
  const imageSrc = imgBuilder.image(image);
  return (
    <>
      <div>
        <BlogSlider
          author={post.author}
          post={post}
          images={images}
          postImage={imageSrc}
          postBody={images.body}
          postTitle={title}
          postYoutubeLink={youtubeLink}
          allSlides={PostSlides}
        />
        <SideIcons />
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
      post: post,
      title: post.title,
      body: post.body,
      image: post.mainImage,
      youtubeLink: post.youtubeLink,
    };
  }
};

export default SinglePost;
