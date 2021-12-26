import React from "react";

import { Carousel } from "3d-react-carousal";
import SectionHeader from "components/sectionHeading";
import { TopTenProjectsData } from "components/data/topTenProjects";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let slides = [...TopTenProjectsData];
    return (
      <div className="mb-16 sm:mb-28 h-1/6">
        <SectionHeader heading="Top 10 Projects" value="1" />
        <div className="mt-12 sm:mt-0">
          <Carousel slides={slides} />
        </div>
      </div>
    );
  }
}

export default MyApp;
