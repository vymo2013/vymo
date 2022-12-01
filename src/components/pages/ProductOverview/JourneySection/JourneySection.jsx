import React from 'react';
import DropDown from '../../../DropDown/DropDown';
import SectionHeading from '../../../Heading/SectionHeading';
import Tabs from '../../../Tabs/Tabs';
import Card from './Card';

const customerExperience = [
  {
    key: 0,
    title: 'Rep’s Incentives & Goals',
    text: 'How many policies should I sell?',
    image: {
      src: 'p1-1.svg',
      width: '236',
      height: '128',
    },
  },
  {
    key: 1,
    title: 'Activities',
    text: 'Who to meet and when?',
    image: {
      src: 'p1-2.svg',
      width: '241',
      height: '139',
    },
  },
  {
    key: 2,
    title: 'Customer Experience',
    text: 'When should I engage a customer?',
    image: {
      src: 'p1-3.svg',
      width: '249',
      height: '142',
    },
  },
  {
    key: 3,
    title: 'Organization’s Objectives',
    text: 'How can we improve the topline? /How quickly can we convert a lead?',
    image: {
      src: 'p1-4.svg',
      width: '156',
      height: '162',
    },
  },
];
const crossSelling = [
  {
    key: 0,
    title: 'Prospecting',
    text: 'Who to prioritize?',
    image: {
      src: 'p2-1.svg',
      width: '200',
      height: '154',
    },
  },
  {
    key: 1,
    title: 'Selling',
    text: 'Have I understood what my client needs?',
    image: {
      src: 'p2-2.svg',
      width: '195',
      height: '157',
    },
  },
  {
    key: 2,
    title: 'Cross-selling',
    text: 'When should I engage a customer?',
    image: {
      src: 'p2-3.svg',
      width: '187',
      height: '130',
    },
  },
  {
    key: 3,
    title: 'Servicing',
    text: 'Am I helping my customers achieve their goals',
    image: {
      src: 'p2-4.svg',
      width: '162',
      height: '159',
    },
  },
];
const tabs = [
  {
    key: '0',
    header: 'Customer Experience',
    content: (
      <div className="mt-4.5">
        <div className="container">
          <div className="flex-wrap md:mx-[-15px] hidden md:flex journey-card-container">
            {customerExperience.map((d) => (
              <Card ky={d.key} {...d} />
            ))}
          </div>
          <div className="block md:hidden journey-dropdown">
            <DropDown
              data={customerExperience.map((v) => ({
                id: v.key.toString(),
                title: (
                  <h3 className="flex-1 inline font-bold text-22 leading-[32px] tracking-[-1px] my-2">
                    {v.title}
                  </h3>
                ),
                content: (
                  <>
                    <p className="font-medium text-16 leading-6 opacity-50 text-black mb-4">
                      {v.text}
                    </p>
                    <img
                      alt=""
                      {...v.image}
                      src={`/img/product-overview/${v.image.src}`}
                      className="w-full max-w-[350px]"
                    />
                  </>
                ),
              }))}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    key: '1',
    header: 'Cross-Selling',
    content: (
      <div className="mt-4.5">
        <div className="container">
          <div className="flex-wrap md:mx-[-15px] hidden md:flex journey-card-container">
            {crossSelling.map((d) => (
              <Card ky={d.key} {...d} />
            ))}
          </div>
          <div className="block md:hidden">
            <DropDown
              data={crossSelling.map((v) => ({
                id: v.key.toString(),
                title: (
                  <h3 className="flex-1 inline font-bold text-22 leading-[32px] tracking-[-1px] my-2">
                    {v.title}
                  </h3>
                ),
                content: (
                  <>
                    <p className="font-medium text-16 leading-6 opacity-50 text-black mb-4">
                      {v.text}
                    </p>
                    <img
                      alt=""
                      {...v.image}
                      src={`/img/product-overview/${v.image.src}`}
                      className="w-full max-w-[350px]"
                    />
                  </>
                ),
              }))}
            />
          </div>
        </div>
      </div>
    ),
  },
];
function JourneySection() {
  return (
    <section className="relative p-section-2 journey-section">
      <div className="container mb-3 md:mb-4.5">
        <SectionHeading>Design strategic journey bottom up</SectionHeading>
      </div>

      <Tabs centered fullWidth={false} data={tabs} />
    </section>
  );
}

export default JourneySection;
