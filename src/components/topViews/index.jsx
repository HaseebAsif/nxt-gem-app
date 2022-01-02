import SectionHeader from "components/sectionHeading";
import SingleLargeVideoViews from "components/singleLargeVideoViews";
import SingleSmallVideoViews from "components/singleSmallVideoViews";
import { useEffect, useState } from "react";
const TopViews = () => {
  const [TopViewsData, setTopViewsData] = useState([]);
  useEffect(() => {
    fetch("/api/topViews")
      .then((response) => response.json())
      .then((data) => setTopViewsData(data));
  }, []);
  console.log(TopViewsData);
  return (
    <div className="mb-24 sm:mb-32 animate-fadeIn">
      <div className="mt-8">
        <SectionHeader heading="Top Views" value="2" />
      </div>
      <div className="flex items-center justify-center flex-col lg:flex-row lg:mx-12 xl:mx-48">
        {TopViewsData.slice(0, 1).map(({ link }) => (
          <SingleLargeVideoViews videoUrl={link} />
        ))}

        <div className="lg:ml-[80px]">
          <div className="flex justify-center items-center mt-5 lg:mt-0">
            <img
              src="https://res.cloudinary.com/nxtgem-io/image/upload/v1640600233/Sponsered_rbijdc.png"
              className="object-contain"
              alt=""
            />
          </div>
          <div className="flex flex-row flex-wrap justify-center lg:flex-col">
            {TopViewsData.slice(1, 4).map(({ link }) => (
              <SingleSmallVideoViews videoUrl={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopViews;
