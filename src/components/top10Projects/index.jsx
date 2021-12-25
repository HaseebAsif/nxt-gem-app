import React from "react";

import { Carousel } from "3d-react-carousal";
import SectionHeader from "components/sectionHeading";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let slides = [
      <img src="/assets/Picture-Assets/Blog-11.jpg" alt="1" />,
      <img src="/assets/Picture-Assets/Blog-11.jpg" alt="2" />,
      <img src="/assets/Picture-Assets/Blog-11.jpg" alt="3" />,
      <img src="/assets/Picture-Assets/Blog-11.jpg" alt="4" />,
      <img src="/assets/Picture-Assets/Blog-11.jpg" alt="5" />,
    ];
    return (
      <div className="mb-12 sm:mb-28 h-full">
        <SectionHeader heading="Top 10 Projects" value="1" />
        <Carousel slides={slides} />
      </div>
    );
  }
}

export default MyApp;
