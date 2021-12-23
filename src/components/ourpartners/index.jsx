import SectionHeader from 'components/sectionHeading'
import React from 'react'

const OurPartners = () => {
    return (
      <div className="py-12">
        <SectionHeader heading="Our Partners" />
        <div className="grid place-items-center h-[50vh]">
          <img
            className="w-1/12"
            src="/assets/Homepage-Assets/QUESTION-MARK.png"
            alt=""
          />
        </div>
      </div>
    );
}

export default OurPartners
