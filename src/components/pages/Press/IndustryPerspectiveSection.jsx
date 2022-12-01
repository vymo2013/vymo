import React from 'react';
import SectionHeading from '../../Heading/SectionHeading';
import IndustrySlider from '../../Slider/IndustrySlider';

function IndustryPerspectiveSection() {
  return (
    <section className="relative section-pad bg-darkPurple overflow-hidden">
      <div className="container">
        <div className="w-full lg:w-3/5 mx-auto mb-4 md:mb-6">
          <SectionHeading className="text-white">
            Get the industry’s perspective on Vymo.
          </SectionHeading>
        </div>
        <IndustrySlider />
      </div>
    </section>
  );
}

export default IndustryPerspectiveSection;
