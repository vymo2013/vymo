import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../../Heading/SectionHeading';
function SalesDetailsSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section className="section-pad sales-detail-section fade-in" ref={ref}>
      <div className="container">
        <div className="w-full lg:w-3/5 mx-auto">
          <SectionHeading className="mb-3 md:mb-6">
            The most loved Sales Engagement Platform.
          </SectionHeading>
        </div>
      </div>
      <div className="container no-padding">
        <div className="flex sales-detail-cards">
          <div className="sales-card">
            <h3 className="text-48 lg:text-60 text-black font-bold">
              75 <span className="-ml-1 md:-ml-2">%</span>
            </h3>
            <p className="text-black opacity-60 font-medium">
              Daily active asage
            </p>
          </div>
          <div className="sales-card">
            <h3 className="text-48 lg:text-60 text-black font-bold">
              60{' '}
              <span className="text-18 -ml-1 md:ml-0 md:text-32 tracking-normal">
                minutes
              </span>
            </h3>
            <p className="text-black opacity-60 font-medium">
              Time spent by users
            </p>
          </div>
          <div className="sales-card">
            <h3 className="text-48 lg:text-60 text-black font-bold">
              90 <span className="-ml-1 md:-ml-2">%</span>
            </h3>
            <p className="text-black opacity-60 font-medium">
              Increase in CRM active usage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesDetailsSection;
