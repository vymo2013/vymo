/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../Heading/SectionHeading';
function BannerSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section className="section-pad sales-detail-section" ref={ref}>
      <div className="container no-padding">
        <div className="row relative z-10 col-xs-12">
          <div className="w-full lg:w-1/2 lg:top-3 lg:h-[0%] p-2">
            <a
              href="https://www.vymo.com/forrester-wave-sales-engagement-2022/"
              target="_blank">
              <img
                src="/img/Forrester.webp"
                alt="Forreste Banner"
                className="w-full"
              />
            </a>
          </div>
          <div className="w-full lg:w-1/2 lg:top-3 lg:h-[0%] p-2">
            <a
              href="https://vymo.com/blog/gordon-ritter-on-the-next-frontier-of-software/"
              target="_blank">
                <img
                src="/img/Gordon.webp"
                alt="Gordon Banner"
                className="w-full"
                />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
