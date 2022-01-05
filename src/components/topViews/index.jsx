import SectionHeader from "components/sectionHeading";
import SingleLargeVideoViews from "components/singleLargeVideoViews";
import SingleSmallVideoViews from "components/singleSmallVideoViews";
import { useEffect, useState } from "react";
const TopViews = () => {
  const [TopViewsData, setTopViewsData] = useState([]);
  const [mainVideo, setMainVideo] = useState("1");
  const [largeVideo, setLargeVideo] = useState([]);
  const [smallVideo, setSmallVideo] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "topViews" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setTopViewsData(
      result.result
        .slice(0, 4)
        .sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
  useEffect(() => {
    setLargeVideo(TopViewsData.filter((value) => value.order === mainVideo));
    setSmallVideo(TopViewsData.filter((value) => value.order !== mainVideo));
  }, [TopViewsData, mainVideo]);
  const SetMainVideoFunction = (orderProp) => {
    setMainVideo(orderProp);
  };
  return (
    <div className="mb-24 sm:mb-32 animate-fadeIn">
      <div className="mt-8">
        <SectionHeader heading="Top Views" value="2" />
      </div>
      <div className="flex items-center justify-center flex-col lg:flex-row lg:mx-12 xl:mx-48">
        {largeVideo.map(({ link, order }) => (
          <div key={order}>
            <SingleLargeVideoViews
              handleClick={() => SetMainVideoFunction(order)}
              videoUrl={link}
            />
          </div>
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
            {smallVideo.map(({ link, order }) => (
              <div key={order}>
                <SingleSmallVideoViews
                  handleClick={() => SetMainVideoFunction(order)}
                  videoUrl={link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopViews;
