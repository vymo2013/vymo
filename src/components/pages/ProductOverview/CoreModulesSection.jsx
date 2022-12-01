import React from 'react';
import Button from '../../Button/Button';
import DropDown from '../../DropDown/DropDown';
import SectionHeading from '../../Heading/SectionHeading';
const panels = [
  {
    key: 0,
    title: 'Lead Management',
    text: 'Allocate leads intelligently and nudge next best actions to improve lead conversion rates.',
    link: '!#',
  },
  {
    key: 1,
    title: 'Activity Management',
    text: 'Capture activities and nudge suggestions and interventions to improve sales productivity.',
    link: '!#',
  },
  {
    key: 2,
    title: 'Customer Relationship Management',
    text: 'Design engagement cadences and automate workflows to improve customer experience.',
    link: '!#',
  },
  {
    key: 3,
    title: 'Partner Relationship Management',
    text: 'Design engagement cadences and automate workflows to grow partner book of business.',
    link: '!#',
  },
];
function CoreModulesSection() {
  return (
    <section className="relative p-section-3">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center flex-col-reverse lg:flex-row">
          <div className="block md:hidden mt-1">
            <DropDown
              data={panels.map((p) => ({
                id: p.key.toString(),
                title: (
                  <h3 className="flex-1 inline font-bold text-22 leading-[32px] tracking-[-1px] my-2">
                    {p.title}
                  </h3>
                ),
                content: (
                  <>
                    <p className="font-medium text-16 leading-6 opacity-50 text-black ">
                      {p.text}
                    </p>
                    <Button link chevron>
                      Learn more
                    </Button>
                  </>
                ),
              }))}
            />
          </div>
          <div className="w-full max-w-full lg:max-w-[543px] relative">
            <img
              src="/img/design-element/blue-curve.svg"
              loading="lazy"
              alt=""
              className="absolute top-2 -right-4 translate-x-1/2 -translate-y-full hidden lg:block"
            />
            <img
              src="/img/product-overview/core-modules.svg"
              className="w-full"
              width="543"
              height="537"
              alt=""
            />
          </div>

          <div className="w-full lg:max-w-[650px] lg:ml-3 overflow-hidden">
            <SectionHeading
              className="mb-4 md:mb-5 text-center lg:text-left max-w-xs md:max-w-xl lg:max-w-max mx-auto lg:mx-0"
              textAlign="left">
              Drive more sales with our core modules
            </SectionHeading>
            <div className="hidden md:flex flex-wrap relative -mt-3 -mx-2">
              {panels.map((p) => (
                <div className="w-1/2 px-2 py-3" key={p.key}>
                  <div className="font-bold text-22 leading-[32px] tracking-[-1px] pb-1 font-objectivity">
                    {p.title}
                  </div>
                  <p className="font-medium text-14 leading-[21px] opacity-50 text-black mb-0">
                    {p.text}
                  </p>
                  <Button link chevron>
                    Learn more
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreModulesSection;
