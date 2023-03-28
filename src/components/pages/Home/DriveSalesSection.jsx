/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../Heading/SectionHeading';
function DriveSalesSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section className="sales-detail-section mb-6 pb-6 mt-6" ref={ref}>
      <div className="container">
        <div className="w-full lg:w-6/12 mx-auto">
          <h3 className="mb-1 md:mb-4 font-light md:text-[40px] text-center xl:leading-[50px]">
            <span className="font-bold">Drive More Sales with Vymo’s</span>{' '}
            <i>Sales Engagement Platform</i>
          </h3>
        </div>
      </div>
      <div className="container no-padding mb-0">
        <div className="row relative z-10 col-xs-12">
          <div className="w-full lg:w-1/3 lg:top-3 lg:h-[0%] p-4">
            <img
              src="/img/home-icon1.png"
              alt="Capture Icon"
              className="w-[96px] pt-2"
            />
            <h3 className="font-bold md:text-[26px] text-left xl:leading-[36px] pt-3">
              Capture
            </h3>
            <p className="font-normal md:text-[16px] text-left xl:leading-[26px] pt-1">
              Capture rich contextual data from sales activities automatically,
              so your teams can focus on customer interactions.
            </p>
          </div>
          <div className="w-full lg:w-1/3 lg:top-3 lg:h-[0%] p-4">
            <img
              src="/img/home-icon2.png"
              alt="Capture Icon"
              className="w-[75px] h-[75px] pt-2"
            />
            <h3 className="font-bold md:text-[26px] text-left xl:leading-[36px] pt-4">
              Learn
            </h3>
            <p className="font-normal md:text-[16px] text-left xl:leading-[26px] pt-1">
              Learn from the best performers in your own organisation and
              abstract best behaviours to coach the rest.
            </p>
          </div>

          <div className="w-full lg:w-1/3 lg:top-3 lg:h-[0%] p-4">
            <img
              src="/img/home-icon3.png"
              alt="predict Icon"
              className="w-[96px] pt-2"
            />
            <h3 className="font-bold md:text-[26px] text-left xl:leading-[36px] pt-3">
              Predict
            </h3>
            <p className="font-normal md:text-[16px] text-left xl:leading-[26px] pt-1">
              Predict ‘next best actions’ in the moment so your sales people can get manager support to close more deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DriveSalesSection;
