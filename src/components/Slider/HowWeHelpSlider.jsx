import React from 'react';
import ProgressSlider from './ProgressSlider';
const challenges = [
  {
    id: 1,
    title: 'Single window',
    text: 'Reps can import leads from web-based CRMs, third-party databases, and geo-location based prompts into Vymo and view all their leads in a single space.',
    image: {
      src: 'increase-lead-generation.svg',
      width: '93',
      height: '86',
    },
  },
  {
    id: 2,
    title: 'Smart allocation',
    text: 'The right leads are automatically allocated to the right reps through comprehensive standards like current lead location, rep availability and more!',
    image: {
      src: 'quicker-conversions.svg',
      width: '93',
      height: '86',
    },
  },
  {
    id: 3,
    title: 'Engagement guidance',
    text: 'Agents receive automatic nudges and reminders on the right time to engage with customers across channels',
    image: {
      src: 'course-correct.svg',
      width: '93',
      height: '86',
    },
  },
  {
    id: 4,
    title: 'Know all your Leads',
    text: 'Vymo provides users with a comprehensive view of all details, engagements and metadata concerning the lead. This allows reps to manage their leads more effectively and bring in higher revenue from each of them',
    image: {
      src: 'know-all-your-leads.svg',
      width: '93',
      height: '86',
    },
  },
];

function HowWeHelpSlider() {
  return (
    <ProgressSlider>
      {challenges.map((c) => (
        <div key={c.id} className="item">
          <div className="help-slider-item bg-blue rounded-2xl p-3 h-full">
            <img
              src={`/img/icons/${c.image.src}`}
              width={c.image.width}
              height={c.image.height}
              alt={c.title}
              className="-translate-x-3"
            />
            <div className="pt-2">
              <h6 className="font-bold text-20 md:text-22 tracking-[-1px] ">
                {c.title}
              </h6>
              <p className="text-14 md:text-16 font-medium opacity-50 leading-5 md:leading-7 mt-1">
                {c.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </ProgressSlider>
  );
}

export default HowWeHelpSlider;
