import React from 'react';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';
import Tabs from '../../Tabs/Tabs';
const tabs = [
  {
    key: '1',
    header: 'Delayed Allocation',
    content: (
      <img
        className="w-full mt-3 lg:mb-4"
        src="/img/lead-management/delayed-allocation.png"
        alt="Delayed Allocation"
        width="619"
        height="400"
      />
    ),
  },
  {
    key: '2',
    header: 'Suboptimal Allocation',
    content: (
      <img
        className="w-full mt-3 lg:mb-4"
        src="/img/lead-management/delayed-allocation.png"
        alt="Suboptimal Allocation"
        width="619"
        height="400"
      />
    ),
  },
  {
    key: '3',
    header: 'Inefficient Nature',
    content: (
      <img
        className="w-full mt-3 lg:mb-4"
        src="/img/lead-management/delayed-allocation.png"
        alt="Inefficient Nature"
        width="619"
        height="400"
      />
    ),
  },
  // {
  //   key: '4',
  //   header: 'Inefficient Nature',
  //   content: (
  //     <img
  //       className="w-full mt-3 lg:mb-4"
  //       src="/img/lead-management/delayed-allocation.png"
  //       alt=""
  //       width="619"
  //       height="400"
  //     />
  //   ),
  // },
  // {
  //   key: '5',
  //   header: 'Inefficient Nature',
  //   content: (
  //     <img
  //       className="w-full mt-3 lg:mb-4"
  //       src="/img/lead-management/delayed-allocation.png"
  //       alt=""
  //       width="619"
  //       height="400"
  //     />
  //   ),
  // },
];
function LeadChallenges() {
  return (
    <section className="relative section-pad challenge-section">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 text-center md:text-left lg:pr-4 lg:self-center">
            <SectionHeading className="heading">
              The Challenge With Lead Management Today?
            </SectionHeading>
            <p className="text-black font-medium opacity-90 leading-5 md:leading-7 mt-2 mx-auto md:mx-0 max-w-[540px]">
              There are too many sources, with too little time!
              <span className="d-bck">Lead management software has a significant impact not just in improving business performance, but also the seller experience. If lead management isn’t done right, then the resulting issues can equate to revenue leakages.</span>
             
            </p>
            <Button className="mt-2 md:mt-2">
              How can Vymo help?
            </Button>
          </div>
          <div className="w-full lg:w-1/2 tabs-col mt-4 lg:mt-0">
            <Tabs data={tabs} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadChallenges;
