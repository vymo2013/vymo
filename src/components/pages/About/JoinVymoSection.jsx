import React from 'react';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';
function JoinVymoSection() {
  return (
    <section className="relative section-pad bg-lightPurple overflow-hidden">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <SectionHeading className="text-white">Join Vymo</SectionHeading>
          <SectionHeading className="text-white">
            Do the best work of your life!
          </SectionHeading>

          <Button className="mt-3 md:mt-1">See open positions</Button>
          <img
            width="274px"
            height="187px"
            src="/img/design-element/grid.svg"
            alt=""
            className="absolute scale-50 md:scale-100 top-[-65px] -left-[110px] md:top-[-100px] md:-left-3"
          />
          <img
            width="274px"
            height="187px"
            src="/img/design-element/grid.svg"
            alt=""
            className="absolute scale-50 md:scale-100  bottom-[-92px] -right-[120px] md:bottom-[-100px] md:-right-3"
          />
        </div>
      </div>
    </section>
  );
}

export default JoinVymoSection;
