import React from 'react';
import Button from '../../Button/Button';
import DropDown from '../../DropDown/DropDown';
import SectionHeading from '../../Heading/SectionHeading';
const panels = [
  {
    key: 0,
    title: 'Lead Management',
    text: 'Allocate leads intelligently and nudge next best actions to improve lead conversion rates.',
    link: '/solution/lead-management',
  },
  {
    key: 1,
    title: 'Activity Management',
    text: 'Capture activities and nudge suggestions and interventions to improve sales productivity.',
    link: '/solution/activity-management',
  },
  {
    key: 2,
    title: 'Customer Relationship Management',
    text: 'Design engagement cadences and automate workflows to improve customer experience.',
    link: '/solution/customer-relationship-management',
  },
  {
    key: 3,
    title: 'Partner Relationship Management',
    text: 'Design engagement cadences and automate workflows to grow partner book of business.',
    link: '/solution/partner-management',
  },
];
function CoreModulesSection() {
  return (
    <section className="relative section-pad section-pad-hf">
      <div className="no-padding">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center flex-col-reverse lg:flex-row p-2 mb-4">
          <div className="block md:hidden mt-3">
            <DropDown
              data={panels.map((p) => ({
                id: p.key.toString(),
                title: (
                  <h3 className="flex-1 inline font-bold text-18 leading-[32px] tracking-[-1px] my-1">
                    {p.title}
                  </h3>
                ),
                content: (
                  <>
                    <p className="font-medium text-14 leading-6 opacity-70 text-black mt-0">
                      {p.text}
                    </p>
                    <a href={p.link}><Button link chevron>
                      Learn more
                    </Button></a>
                  </>
                ),
              }))}
            />
          </div>
          <div className="w-full max-w-full md:w-1/2 relative lg:pr-5">
           {/* <img
              src="/img/design-element/blue-curve.svg"
              loading="lazy"
              alt=""
              className="absolute top-2 -right-4 translate-x-1/2 -translate-y-full hidden lg:block"
            />*/}
            <img
              src="/img/product-overview/drive-more-sales.webp"
              className="w-full"
              width="100%"
              alt="Drive More Sales image"
            />
          </div>

          <div className="w-full md:w-1/2 lg:ml-3 overflow-hidden lg:pr-5">
            <SectionHeading
              className="lg:max-w-[530px] mb-4 md:mb-5 text-center lg:text-left lg:mx-0 text-32 leading-[42px] md:text-48 font-iight md:leading-[54px] font-light"
              textAlign="left">
              <span className="font-bold">Drive</span><i> more sales</i><span className="font-bold"> with our core modules</span>
            </SectionHeading>
            <div className="hidden md:flex flex-wrap relative -mt-3 -mx-2">
              {panels.map((p) => (
                <div className="w-1/2 px-2 py-3" key={p.key}>
                  <div className="font-bold text-22 leading-[32px] tracking-[-1px] pb-1">
                    {p.title}
                  </div>
                  <p className="font-medium text-14 leading-[21px] opacity-70 text-black mb-0">
                    {p.text}
                  </p>
                  <a href={p.link} className="blue-link"><Button link chevron className="mt-[8px]">
                    Learn more
                  </Button></a>
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
