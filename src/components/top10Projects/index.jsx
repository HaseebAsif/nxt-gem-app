import SectionHeader from "components/sectionHeading";
import React, { useState } from "react";
import Slider from "react-slick";

import { TopTenProjectsData } from "../data/topTenProjects";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="nextArrow text-blue-300 rounded-full bg-black opacity-50 px-5 py-2 font-bold text-xl"
      onClick={onClick}
    >
      <div>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="prevArrow text-blue-300 rounded-full bg-black opacity-50 px-5 py-2 font-bold text-xl"
      onClick={onClick}
    >
      <div>
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </div>
    </div>
  );
};

const ImageSlider = (images, slidesToShow = 3) => {
  // 3.
  const [imageIndex, setImageIndex] = useState(0);

  // 4.
  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // 5.
  const templateImages = images.map((image, idx) => {
    return (
      <div
        className={idx === imageIndex ? "activeSlide" : "slide"}
        key={image.id}
      >
        <div className="slideWrapper">
          {image.code ? image.code : <img src={image.src} alt={image.alt} />}
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

const Top10Projects = () => {
  return (
    <div>
      <SectionHeader heading="Top 10 Projects" />
      {ImageSlider(TopTenProjectsData)}
    </div>
  );
};

export default Top10Projects;