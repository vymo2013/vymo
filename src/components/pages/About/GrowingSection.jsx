import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../Heading/SectionHeading';

function GrowingSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="relative section-pad growing-section z-[1] fade-in"
      ref={ref}>
      <div className="container">
        <div className="col-md col-8 offset-2 mx-auto">
          <SectionHeading>We’re growing every minute!</SectionHeading>
          <div className="relative flex mb-3 mt-3 md:mt-[72px] flex-wrap">
            <div className="col-6 pr-1 md:pr-2 pb-1 md:pb-2">
              <div className="growing-card red-card">
                <h6>500</h6>
                <span>People</span>
              </div>
            </div>
            <div className="col-6 pl-1 md:pl-2 pb-1 md:pb-2">
              <div className="growing-card blue-card">
                <h6>07</h6>
                <span>Countries</span>
              </div>
            </div>
            <div className="col-6 pr-1 md:pr-2 pt-1 md:pt-2">
              <div className="growing-card green-card">
                <h6>300K</h6>
                <span>Users</span>
              </div>
            </div>
            <div className="col-6 pl-1 md:pl-2 pt-1 md:pt-2">
              <div className="growing-card red-card">
                <h6>65</h6>
                <span>Deployments</span>
              </div>
            </div>

            <svg
              width="79"
              height="163"
              viewBox="0 0 79 163"
              fill="none"
              className="hidden lg:block absolute top-[55%] right-[-79px] -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.292879 155.707C-0.0976469 155.317 -0.0976468 154.683 0.292879 154.293L6.65684 147.929C7.04737 147.538 7.68053 147.538 8.07105 147.929C8.46158 148.319 8.46158 148.953 8.07105 149.343L2.4142 155L8.07105 160.657C8.46158 161.047 8.46158 161.681 8.07105 162.071C7.68053 162.462 7.04736 162.462 6.65684 162.071L0.292879 155.707ZM0.999987 154C42.9736 154 77 119.974 77 78L79 78C79 121.078 44.0782 156 0.999986 156L0.999987 154ZM77 78C77 36.0264 42.9736 2 1 1.99999L1 -6.73155e-06C44.0782 -2.96554e-06 79 34.9218 79 78L77 78Z"
                fill="#307388"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowingSection;
