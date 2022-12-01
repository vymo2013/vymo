import React from 'react';
import Button from '../Button/Button';
import SectionHeading from '../Heading/SectionHeading';
function VymoInActionSection() {
  return (
    <section className="relative section-pad bg-lightPurple overflow-hidden">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <SectionHeading className="text-white">
            Ready to See Vymo in Action?
          </SectionHeading>
          <p className="text-white text-16 md:text-18 mt-1 font-medium opacity-60 text-center">
            Unlock faster sales cycles and more predictable revenue with the
            Vymo Sales Engagement.
          </p>
          <Button className="mt-3 md:mt-2 md:px-4 md:py-2">
            Learn more about Vymo Security
          </Button>
          <img
            width="274px"
            height="187px"
            src="/img/design-element/grid.svg"
            alt=""
            className="absolute scale-50 md:scale-100 top-[-65px] -left-[110px] md:top-[-100px] md:-left-3 select-none"
          />
          <img
            width="274px"
            height="187px"
            src="/img/design-element/grid.svg"
            alt=""
            className="absolute scale-50 md:scale-100  bottom-[-92px] -right-[120px] md:bottom-[-100px] md:-right-3 select-none"
          />
        </div>
      </div>
    </section>
  );
}

export default VymoInActionSection;
