import React, { useState, useEffect } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";

import styles from "./slider.module.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useSwipeable } from "react-swipeable";
import SingleLargeVideoViews from "components/singleLargeVideoViews";
import BlogTitleDesign from "components/blogTitleDesign";
import imageUrlBuilder from "@sanity/image-url";
import AuthorDetailSlide from "components/authorDetailsCard";
import MoreNXTGemStories from "components/moreNXTGEMStories";

const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 15px;
  width: 98vw;
  justify-content: center;
  @media (max-width: 768px) {
    bottom: -130px;
  }
`;

const Dot = styled.div`
  width: 20px;
  height: 5px;
  border-radius: 6px;
  background-color: white;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 5px;
  transition: 750ms all ease-in-out;
`;

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
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
  );
};

const Wrapper = styled.div`
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
  background-repeat: no-repeat;
  height: auto;
  @media (max-width: 768px) {
    height: 120vh;
  }
`;

const Arrow = styled.div`
  position: absolute;
  z-index: 99999999999999;
  color: #1295bd;
  background-color: black;
  left: ${(props) => (props.left ? "10px" : "auto")};
  right: ${(props) => (props.right ? "10px" : "auto")};
  top: 50vh;
  height: 50px;
  width: 50px;
  border-radius: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  cursor: pointer;
  animation-name: ${(props) =>
    (props.right && "right") || (props.left && "left")};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  @keyframes left {
    0% {
      left: 10px;
    }
    50% {
      left: 40px;
    }
    100% {
      left: 10px;
    }
  }
  @keyframes right {
    0% {
      right: 10px;
    }
    50% {
      right: 40px;
    }
    100% {
      right: 10px;
    }
  }
  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
    font-size: 10px;
  }
`;

const ImageSlider = ({
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
                <img
                  src={postImage}
                  alt={postTitle}
                  className="w-[70vw] h-[60vh] object-cover rounded-[33px] shadow-2xl"
                />
              </div>
            </div>
          </Fade>
        </Slide>
      ))}
      {images
        .slice(1, images.length - 3)
        .map(({ backgroundImage, body, header }, index) => (
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
              <div className="lg:h-[60%] flex items-center justify-center">
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
        ))}
      {images
        .slice(images.length - 3, images.length - 2)
        .map(({ backgroundImage, body }, index) => (
          <Slide
            key={index}
            style={{
              backgroundImage: `url(${imageUrlBuilding(backgroundImage)})`,
            }}
          >
            <div
              className={`flex items-center justify-center min-h-screen h-full text-white text-lg`}
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
        ))}
      {images
        .slice(images.length - 2, images.length - 1)
        .map(({ backgroundImage, body }, index) => (
          <Slide
            key={index}
            style={{
              backgroundImage: `url(${imageUrlBuilding(backgroundImage)})`,
            }}
          >
            <div
              className={`${styles.slider__data} flex py-0 py-24 xl:py-16 justify-center min-h-screen h-full text-white text-lg m-auto`}
            >
              <AuthorDetailSlide
                author={author}
                AuthorData={AuthorData}
                setAuthorData={setAuthorData}
                allPost={allPost}
              />
            </div>
          </Slide>
        ))}
      {images
        .slice(images.length - 1, images.length)
        .map(({ backgroundImage, body }, index) => (
          <Slide
            key={index}
            style={{
              backgroundImage: `url(${imageUrlBuilding(backgroundImage)})`,
            }}
          >
            <div
              className={`${styles.slider__data} py-24 flex items-center justify-center min-h-screen h-full text-white text-lg m-auto`}
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
                />
                <MoreNXTGemStories
                  allPost={allPost}
                  articleSlug={post.relatedArticle2}
                />
                <MoreNXTGemStories
                  allPost={allPost}
                  articleSlug={post.relatedArticle3}
                />
              </div>
            </div>
          </Slide>
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

export default ImageSlider;
