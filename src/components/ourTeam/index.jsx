import imageUrlBuilder from "@sanity/image-url";

import SectionHeader from "components/sectionHeading";
import React, { useEffect, useState } from "react";

import OurTeamName from "./ourTeamName";

const OurTeam = () => {
  const [OurTeamData, setOurTeamData] = useState([]);
  useEffect(() => {
    fetch("/api/ourTeam")
      .then((response) => response.json())
      .then((data) => setOurTeamData(data));
  }, []);

  return (
    <div className="animate-fadeIn">
      <SectionHeader heading="Our Team" value="4" />
      <div className="grid grid-cols-1 place-items-center mx-28 sm:mx-48 lg:grid-cols-3 sm:grid-cols-2">
        {OurTeamData.map(
          ({
            id,
            name,
            mainImage,
            post,
            facebook,
            mainImageShadow,
            linkedin,
            telegram,
            twitter,
          }) => {
            const imgBuilder = imageUrlBuilder({
              projectId: "cqnczxva",
              dataset: "production",
            });
            const imageSrc = imgBuilder.image(mainImage);
            const imgHoverSrc = imgBuilder.image(mainImageShadow);
            return (
              <div key={id} className="mt-12">
                <div className="h-[180px]">
                  <img
                    src={imageSrc}
                    alt=""
                    className="max-w-[180px] drop-shadow-2xl"
                  />
                  <img
                    src={imgHoverSrc}
                    alt=""
                    className="max-w-[180px] relative bottom-[180px] hover:hidden drop-shadow-xl"
                  />
                </div>
                <OurTeamName name={name} />
                <div className="text-white text-center text-lg mb-2">
                  {post}
                </div>
                <div className="flex items-center justify-center">
                  <a href={facebook} className="mx-1" target="_blank">
                    <img
                      src={
                        "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600818/TEAM-Facebook-Button_dgyvum.png"
                      }
                      alt={facebook}
                      className="w-[30px]"
                    />
                  </a>
                  <a href={telegram} className="mx-1" target="_blank">
                    <img
                      src={
                        "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600819/TEAM-Telegram-Button_dqem53.png"
                      }
                      alt={telegram}
                      className="w-[30px]"
                    />
                  </a>
                  <a href={linkedin} className="mx-1" target="_blank">
                    <img
                      src={
                        "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600819/TEAM-LinkedIn-Button_uj2gdj.png"
                      }
                      alt={linkedin}
                      className="w-[30px]"
                    />
                  </a>
                  <a href={twitter} className="mx-1" target="_blank">
                    <img
                      src={
                        "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600819/TEAM-Twitter-Button_hfn0qx.png"
                      }
                      alt={twitter}
                      className="w-[30px]"
                    />
                  </a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default OurTeam;
