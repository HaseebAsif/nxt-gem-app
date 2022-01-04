import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";

export const Post = ({ image, body, title }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "cqnczxva",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div className="px-2 sm:px-28 mt-24">
      <div>
        <h1 className="font-bold text-3xl">{title}</h1>
        {imageUrl && <img src={imageUrl} />}

        <div className="body__singlepost">
          {body && <SanityBlockContent blocks={body} />}
        </div>
      </div>
    </div>
  );
};

Post.getInitialProps = async (pageContext) => {
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

export default Post;
