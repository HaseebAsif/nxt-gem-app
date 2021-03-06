import React, { useState, useEffect } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";

import styles from "./blogSlider.module.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useSwipeable } from "react-swipeable";
import SingleLargeVideoViews from "components/singleLargeVideoViews";
import BlogTitleDesign from "components/blogTitleDesign";
import imageUrlBuilder from "@sanity/image-url";
import AuthorDetailSlide from "components/authorDetailsCard";
import MoreNXTGemStories from "components/moreNXTGEMStories";
import {
  IndicatorWrapper,
  Slide,
  Dot,
  Wrapper,
  Arrow,
} from "./blogSliderStyles";

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    // <div className="relative">
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
    // </div>
  );
};

const BlogSlider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 100000000,
  children,
  postBody,
  postTitle,
  author,
  postImage,
  post,
  postYoutubeLink,
  allSlides,
  ...props
}) => {
  const [AuthorData, setAuthorData] = useState({});
  const [allPost, setAllPost] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }
  function prevSlide(slideIndex = currentSlide - 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "post" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());

    setAllPost(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  function checkKey(e) {
    if (e.keyCode == "38") {
      nextSlide();
    } else if (e.keyCode == "40") {
      prevSlide();
    } else if (e.keyCode == "37") {
      prevSlide();
    } else if (e.keyCode == "39") {
      nextSlide();
    }
  }
  function imageUrlBuilding(image) {
    const imgBuilder = imageUrlBuilder({
      projectId: "cqnczxva",
      dataset: "production",
    });
    const imageSrc = imgBuilder.image(image);
    return imageSrc;
  }
  return (
    <Wrapper
      {...props}
      onKeyDown={(e) => checkKey(e)}
      tabIndex="0"
      {...handlers}
    >
      {images.slice(0, 1).map(({ backgroundImage }, index) => (
        <>
          {backgroundImage && (
            <Slide
              key={index}
              style={{
                backgroundImage: `url(${imageUrlBuilding(backgroundImage)})`,

                marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
              }}
            >
              <Fade left>
                <div className="flex items-center flex-col justify-center min-h-screen h-fit text-white text-lg">
                  <div>
                    <div>
                      {/* <div
                    className={`flex absolute top-[20vh] left-[14vw] rounded-bl-full bg-[#0000008f] ${styles.like_share_view}`}
                    >
                    <div
                    className={`flex items-center justify-center mx-1 sm:mx-3 ${styles.like_share_view_text}`}
                    >
                      <img
                        src="https://res.cloudinary.com/nxtgem-io/image/upload/v1645442559/Views_pxubt0.png"
                        className="w-6 sm:w-7 mr-1 sm:mr-2"
                        alt=""
                        />
                        15789
                    </div>
                    <div
                      className={`flex items-center justify-center mx-1 sm:mx-3 ${styles.like_share_view_text}`}
                      >
                      <img
                      src="https://res.cloudinary.com/nxtgem-io/image/upload/v1645442559/Likes_c9k3fp.png"
                        className="w-5 sm:w-6 mx-1 sm:mx-2"
                        alt=""
                        />
                        1213
                    </div>
                    <div
                    className={`flex items-center justify-center mx-1 sm:mx-3 ${styles.like_share_view_text}`}
                    >
                      <img
                        src="https://res.cloudinary.com/nxtgem-io/image/upload/v1645442559/Share_n02vyx.png"
                        className="w-4 sm:w-5 ml-2"
                        alt=""
                        />
                    </div>
                  </div> */}
                    </div>
                    <h1 className=" text-center text-4xl underline underline-offset-4 mb-4">
                      {postTitle}
                    </h1>

                    <img
                      src={postImage}
                      alt={postTitle}
                      className="m-auto w-[70vw] h-[60vh] object-cover rounded-[33px] shadow-2xl"
                    />
                  </div>
                </div>
              </Fade>
            </Slide>
          )}
        </>
      ))}
      {images
        .slice(1, images.length - 3)
        .map(({ backgroundImage, body, header }, index) => (
          <>
            {backgroundImage && (
              <Slide
                key={index}
                style={{
                  backgroundImage: `url(${imageUrlBuilding(backgroundImage)})`,
                }}
              >
                <Zoom>
                  <BlogTitleDesign
                    title={postTitle}
                    date={post.publishedAt}
                    author={AuthorData}
                  />
                  <div className="h-screen lg:h-[60%] flex items-start justify-center">
                    <div
                      className={`${styles.slider__data} ${
                        index === 0 && styles.slider__data__first
                      }  flex flex-col items-center justify-baseline text-white text-md lg:text-lg border-4 shadow-border border-[#023844] mt-20 lg:mt-10 px-4 py-8 lg:p-8`}
                    >
                      <h2 className="text-3xl self-start">{header}</h2>
                      <SanityBlockContent blocks={body} />
                    </div>
                  </div>
                </Zoom>
              </Slide>
            )}
          </>
        ))}
      {images
        .slice(images.length - 3, images.length - 2)
        .map(({ backgroundImage, body }, index) => (
          <>
            {backgroundImage && (
              <Slide
                key={index}
                style={{
                  backgroundImage: `url(${imageUrlBuilding(backgroundImage)})`,
                }}
              >
                <BlogTitleDesign
                  title={postTitle}
                  date={post.publishedAt}
                  author={AuthorData}
                />
                <div
                  className={`flex items-center md:items-start justify-center min-h-[40vh] md:min-h-screen h-auto text-white `}
                >
                  <SingleLargeVideoViews
                    videoUrl={
                      postYoutubeLink
                        ? postYoutubeLink
                        : "https://www.youtube.com/watch?v=bS3b-TdITf0"
                    }
                    autoPlay={false}
                  />
                </div>
              </Slide>
            )}
          </>
        ))}
      {images
        .slice(images.length - 2, images.length - 1)
        .map(({ backgroundImage, body }, index) => (
          <>
            {backgroundImage && (
              <Slide
                key={index}
                style={{
                  backgroundImage: `url(${imageUrlBuilding(backgroundImage)})`,
                }}
              >
                <div
                  className={`${styles.slider__data} flex py-0 py-24 xl:py-8 justify-center min-h-screen  text-white text-lg m-auto`}
                >
                  <AuthorDetailSlide
                    author={author}
                    AuthorData={AuthorData}
                    setAuthorData={setAuthorData}
                    allPost={allPost}
                  />
                </div>
              </Slide>
            )}
          </>
        ))}
      {images
        .slice(images.length - 1, images.length)
        .map(({ backgroundImage, body }, index) => (
          <>
            {backgroundImage && (
              <Slide
                key={index}
                style={{
                  backgroundImage: `url(${imageUrlBuilding(backgroundImage)})`,
                }}
              >
                <div
                  className={`${styles.slider__data} py-6 flex items-center justify-center min-h-screen text-white text-lg m-auto`}
                >
                  <div className="flex items-center py-4">
                    <div className="w-full">
                      <span className="text-2xl sm:text-3xl">
                        MORE NXTGEM STORIES:
                      </span>
                    </div>
                    <MoreNXTGemStories
                      allPost={allPost}
                      articleSlug={post.relatedArticle1}
                      slides={allSlides}
                    />
                    <MoreNXTGemStories
                      allPost={allPost}
                      articleSlug={post.relatedArticle2}
                      slides={allSlides}
                    />
                    <MoreNXTGemStories
                      allPost={allPost}
                      articleSlug={post.relatedArticle3}
                      slides={allSlides}
                    />
                  </div>
                </div>
              </Slide>
            )}
          </>
        ))}

      {currentSlide !== 0 && (
        <Arrow left onClick={() => prevSlide()}>
          <i className="fas fa-angle-left"></i>
        </Arrow>
      )}
      <Arrow right onClick={() => nextSlide()}>
        <i className="fas fa-angle-right"></i>
      </Arrow>

      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
    </Wrapper>
  );
};

export default BlogSlider;
