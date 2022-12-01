import React from 'react';
import SectionHeading from '../../Heading/SectionHeading';

function HeroSection() {
  return (
    <section className="relative text-center pt-[130px] pb-[80px] md:py-[130px] overflow-hidden resources-hero-section">
      <div className="container">
        <span className="text-black opacity-80 text-16 leading-7 font-medium mb-2">
          RESOURCES
        </span>
        <SectionHeading>The Vymo Resource Library</SectionHeading>
      </div>
      <div className="flex justify-center items-center mt-4 md:mt-6">
        <div className="plane-container">
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
