import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChallengesSlider from '../../Slider/VymoSolvesSliders';

function VymoSolvesSection() {

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      disable: window.innerWidth < 768, // Disable AOS on small screens (e.g., phones)
      once: false, // Ensure animations only happen once
    });
    AOS.refresh();
  }, []);

  return (
    <section className="section-pad relative bg-lightWhite overflow-hidden m-pad">
      <div className="container">
        {/* Heading Section */}
        <div className="text-center mb-[41px] md:mb-6">
          <h3
            className="mb-3 md:mb-6 text-[40px] font-light text-center leading-[64px] m-font-head"
            data-aos="fade-right" data-aos-delay="300">

            <span className="font-bold">What do you Want to</span>
            <i> Solve for?</i>
          </h3>
          <div className="flex justify-center item-center gap-3">
              <div className="test-b h-[200px] w-full bg-[#000]" data-aos="fade-up" data-aos-delay="400" data-aos-easing="linear"></div>
              <div className="test-b h-[200px] w-full bg-[#000]" data-aos="fade-up" data-aos-delay="800" data-aos-easing="linear"></div>
              <div className="test-b h-[200px] w-full bg-[#000]" data-aos="fade-up" data-aos-delay="1200" data-aos-easing="linear"></div>
          </div>
        </div>

        {/* Slider Section */}
        <div data-aos="fade-up" data-aos-delay="1500" data-aos-easing="linear">
          <ChallengesSlider />
        </div>
      </div>
    </section>
  );
}

export default VymoSolvesSection;
