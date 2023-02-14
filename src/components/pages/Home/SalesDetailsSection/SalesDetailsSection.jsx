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
          <h3 className="mb-3 md:mb-6 font-light md:text-44 text-center h3-text">
             <span className="font-bold">The power of</span> <i>an intelligent Assistant  </i><span className="font-bold">and</span><i> a Coach</i>
          </h3>
        </div>
      </div>
      <div className="no-padding">
        <div className="row relative z-10 col-xs-12 col-10 offset-1">
          <div className="w-full lg:w-1/2 lg:top-3 lg:h-[0%] p-2">
              <div className="personal-box p-box-bg1">
                <h3 className="font-bold md:text-30">Personal Assistant</h3>
                <p className="font-medium md:text-16 opacity-60 mt-2">Vymo captures sales activities automatically so your sellers don’t have to report them manually. Vymo also helps sellers plan and prioritize their schedules.</p>
                <a href="#!" target="_blank">
                  <button type="button" class="btn btn-pers mb-3 md:mt-3 md:mb-0">See how it works
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline ml-1 -mr-1 transition"><path class="fill-white" d="M11.778 5.25781L10.7199 6.32095L13.1725 8.76218L2.96875 8.77245L2.97026 10.2724L13.1461 10.2622L10.7347 12.6849L11.7979 13.7431L16.0306 9.49051L11.778 5.25781Z"></path></svg>
                  </button>
                </a>
              </div>
          </div>
          <div className="w-full lg:w-1/2 lg:top-3 lg:h-[0%] p-2">
              <div className="personal-box p-box-bg2">
                <h3 className="font-bold md:text-30">Personal Coach</h3>
                <p className="font-medium md:text-16 opacity-60 mt-2">Access real-time data and gain visibility into your team’s adoption metrics, activities, and performance, enabling managers to intervene when necessary.</p>
                <a href="#!" target="_blank">
                  <button type="button" class="btn btn-pers mb-3 md:mt-3 md:mb-0">See how it works
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline ml-1 -mr-1 transition"><path class="fill-white" d="M11.778 5.25781L10.7199 6.32095L13.1725 8.76218L2.96875 8.77245L2.97026 10.2724L13.1461 10.2622L10.7347 12.6849L11.7979 13.7431L16.0306 9.49051L11.778 5.25781Z"></path></svg>
                  </button>
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesDetailsSection;
