import React from 'react';
import SectionHeading from '../../Heading/SectionHeading';

function LittleMoreSection() {
  return (
    <section className="relative section-pad bg-lightWhite little-more-section">
      <div className="container">
        <div className="row">
          <div className="col-md col-10 offset-1 mb-3 md:mb-6">
            <SectionHeading>There’s a little more too with Vymo</SectionHeading>
          </div>
        </div>
        <div className="row-lg justify-center">
          <div className="w-full lg:w-[41.5%]">
            <p>
              Rules can be configured with any parameters of the lead and rep
            </p>
          </div>
          <div className="w-full lg:w-[41.5%] relative">
            <img
              src="/img/lead-management/laptop-illustration.svg"
              alt=""
              width="465"
              className="z-10 relative"
              height="233"
            />
            <img
              alt=""
              src="/img/design-element/leading-curve.svg"
              width="500"
              height="207"
              className="absolute curve"
            />
          </div>
        </div>
        <div className="row-lg lg:flex-row-reverse justify-center bottom-row">
          <div className="w-full lg:w-[41.5%]">
            <p>
              Rules constructs can be combined (by source + by rep + by product)
            </p>
          </div>
          <div className="w-full lg:w-[41.5%]">
            <img
              src="/img/lead-management/mobile-illustration.svg"
              alt=""
              width="334"
              height="269"
              className="lg:ml-6 relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LittleMoreSection;
