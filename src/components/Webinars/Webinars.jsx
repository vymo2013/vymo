import React from 'react';
import Button from '../Button/Button';
import SectionHeading from '../Heading/SectionHeading';
import WebinarCard from './WebinarCard';
import './Webinars.scss';

const webinarsData = [
  {
    id: 0,
    time: 'Thursday, Aug 4, 2021',
    image: '/img/webinars/w1.png',
    title: 'Wealth Banking: Building the Wealth Coaches of Tomorrow.',
    description:
      'This McKinsey report forecasts that “in the next five years around 7,000 ‘traditional’ advisors will retire. By 2030, as advice becomes increasingly analytics-driven and automated, advisers will shift their focus to...',
  },
  {
    id: 1,
    time: 'Thursday, Aug 4, 2021',
    image: '/img/webinars/w2.png',
    title: 'How Nudging Can Power Sales Performance',
    description:
      'Vymo Nudge bumps the right insights to the right users at the right time. ...',
  },
  {
    id: 3,
    time: 'Thursday, Aug 4, 2021',
    image: '/img/webinars/w3.png',
    title: 'Five Skills Moms and Sales Leaders Share',
    description:
      'Vymo Nudge bumps the right insights to the right users at the right time. ...',
  },
  {
    id: 4,
    time: 'Thursday, Aug 4, 2021',
    image: '/img/webinars/w4.png',
    title: 'Four tips to boost remote insurance sales productivity!',
    description:
      'Vymo Nudge bumps the right insights to the right users at the right time. ...',
  },
];
function Webinars() {
  const recentWebinar = webinarsData[0];
  return (
    <div>
      <SectionHeading className="mb-3 md:mb-6">Webinars</SectionHeading>
      <div className="flex flex-wrap webinar-row">
        <div className="w-full lg:w-[58%] hidden md:block relative">
          <div className="w-full h-[430px] max-h-[430px] relative rounded-lg mb-3">
            <img
              src={recentWebinar.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mb-2 text-purple text-14 leading-[21px] font-medium">
            {recentWebinar.time}
          </div>
          <h3 className="mb-[18px] font-bold text-22 leading-8">
            {recentWebinar.title}
          </h3>
          <p className="text-14 font-medium leading-6 opacity-60 text-black h-[3rem] overflow-hidden">
            {recentWebinar.description}
          </p>
        </div>
        <div className="w-full lg:w-[42%] pt-0 md:pt-4 lg:pt-0 lg:pl-4">
          <div className="flex flex-col">
            {webinarsData.map((d, i) => (
              <WebinarCard
                {...d}
                key={d.id}
                className={(i === 0 && 'md:hidden') || ''}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-4 md:mt-6">
        <Button large>View all</Button>
      </div>
    </div>
  );
}

export default Webinars;
