import React, { useState, useEffect } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";

import styles from "./slider.module.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 15px;
  width: 98vw;
  justify-content: center;
`;

const Dot = styled.div`
  width: 20px;
  height: 3px;
  border-radius: 6px;
  background-color: white;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 5px;
  transition: 750ms all ease-in-out;
  @media (max-width: 768px) {
    visibility: hidden;
  }
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
  postImage,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }
  function prevSlide(slideIndex = currentSlide - 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }

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
  return (
    <Wrapper {...props} onKeyDown={(e) => checkKey(e)} tabIndex="0">
      {images.slice(0, 1).map((imageUrl, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${imageUrl.src})`,
            backgroundBlendMode: "color-burn",
            backgroundColor: "gray",
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        >
          <Fade left>
            <div className="flex items-center flex-col justify-center min-h-screen h-fit text-white text-lg">
              <div>
                <h1 className="text-2xl px-2 sm:px-0 text-center sm:text-4xl 2xl:text-5xl pb-6 font-bold underline underline-offset-8">
                  {postTitle}
                </h1>
              </div>
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
      {images.slice(1, images.length - 1).map((imageUrl, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${imageUrl.src})`,
            backgroundBlendMode: "color-burn",
            backgroundColor: "gray",
          }}
        >
          <Zoom>
            <div
              className={`${styles.slider__data} ${
                index === 0 && styles.slider__data__first
              } flex items-center justify-center min-h-screen h-full text-white text-lg`}
            >
              <SanityBlockContent
                blocks={postBody.slice(imageUrl.start, imageUrl.end)}
              />
            </div>
          </Zoom>
        </Slide>
      ))}
      {images.slice(images.length - 1, images.length).map((imageUrl, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${imageUrl.src})`,
            backgroundBlendMode: "color-burn",
            backgroundColor: "gray",
          }}
        >
          <div
            className={`${styles.slider__data} flex items-center justify-center min-h-screen h-full text-white text-lg`}
          ></div>
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
