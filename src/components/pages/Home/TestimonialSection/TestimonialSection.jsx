import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../../Heading/SectionHeading';
function TestimonialSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section className="section-pad sales-detail-section testimonial fade-in mt-3" ref={ref}>
      {/*
      */}
      <div className="no-padding">
        <div className="row relative z-10 col-xs-12 col-8 offset-2">
          <div className="w-full lg:w-5/12 lg:top-3 lg:h-[0%] p-3 m-pt-7">
              <img src="/img/jeff.webp" alt="Jeff Morris" width="100%"/>
          </div>
          <div className="w-full lg:w-7/12 lg:top-3 lg:h-[0%] p-3">
              <img src="/img/red-box.png" alt="Jeff Morris" width="65px" heoght="65px" className="float-right m-hiiden"/>
              <h4 className="font-medium mt-2 quote">Vymo has helped us achieve  and bring sales efficiency, handle more leads in a day and increase the rate of 
              conversion.</h4>
              <p className="font-medium md:text-15 opacity-80 mt-2 mb-0">Jeff Morris, VP-Marketing & Operations</p>
              <img src="/img/logo/bh.png" alt="BHHC logo" width="170px"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
