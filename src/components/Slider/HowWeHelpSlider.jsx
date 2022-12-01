import React from 'react';
import ProgressSlider from './ProgressSlider';
const challenges = [
  {
    id: 1,
    title: 'Increase your Lead Conversion from the get-go',
    text: 'Vymo’s algorithms intelligently allocate your leads to the best-matched rep based on both lead and rep attributes so you can increase your conversion rate automatically.',
    image: {
      src: 'increase-lead-generation.svg',
      width: '93',
      height: '86',
    },
  },
  {
    id: 2,
    title: 'Quicker conversions for every rep',
    text: 'By simply following Vymo’s data-based suggestions, reps can adopt winning behaviors that can help them maximize conversions',
    image: {
      src: 'quicker-conversions.svg',
      width: '93',
      height: '86',
    },
  },
  {
    id: 3,
    title: 'Course-correct before it’s too late',
    text: 'Vymo is the only platform that can detect engagement gaps and potential risks and alert sales reps immediately. Similarly, managers are alerted whenever their team members are falling short so that they can intervene and preemptively coach.',
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
          <div className="help-slider-item bg-white rounded-2xl p-3 h-full">
            <img
              src={`/img/icons/${c.image.src}`}
              width={c.image.width}
              height={c.image.height}
              alt=""
              className="-translate-x-3"
            />
            <div className="pt-2">
              <h6 className="font-bold text-20 md:text-22 tracking-[-1px] ">
                “{c.title}”
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
