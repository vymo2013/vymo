import React from 'react';
import ProgressSlider from './ProgressSlider';
const challenges = [
  {
    id: 1,
    title: 'I want to Improve my Lead Conversions',
    text1: 'Aggregate leads from multiple sources',
    text2: 'Allocate dynamically to best fit sales rep',
    text3: 'Nudge engagement to ensure compliance',
    image: {
      src: 'c1-star.svg',
      width: '35',
      height: '35',
    },
    link: '/lead-management',
  },
  {
    id: 2,
    title: 'I want to Increase my Customer NPS',
    text1: 'Tier customers based on business potential',
    text2: 'Onboard and engage customers seamlessly',
    text3: 'Intelligent suggestions to improve outcomes',
    image: {
      src: 'c2-circle.svg',
      width: '35',
      height: '35',
    },
    link: '/relationship-management',
  },
  {
    id: 3,
    title: 'I want to Improve Partner Engagement',
    text1: 'Recruit, onboard & coach partners seamlessly',
    text2: 'Manage partners based on business potential',
    text3: 'Calendar intelligent engagement plans at scale',
    image: {
      src: 'c3-star.svg',
      width: '35',
      height: '35',
    },
    link: '/partner-management',
  },
  {
    id: 4,
    title: 'I want to Increase Sales Productivity',
    text1: 'Capture all sales activities automatically',
    text2: 'Learn what is working for the best sales reps',
    text3: 'Nudge next best actions contextually',
    image: {
      src: 'c4-stair.svg',
      width: '35',
      height: '35',
    },
    link: '/vymo-coach',
  },
  {
    id: 5,
    title: 'I want to Enable Remote Engagement',
    text1: 'Enable remote customer engagement',
    text2: 'Distribute & coordinate tasks centrally',
    text3: 'Gain visibility through a command center',
    image: {
      src: 'c5-zap.svg',
      width: '35',
      height: '37',
    },
    link: '/wfh',
  },
  {
    id: 6,
    title: 'I want to Increase ROI on my CRM',
    text1: 'Report sales activities automatically',
    text2: 'Nudge next best actions contextually',
    text3: 'Simplify mobile and remote experience',
    image: {
      src: 'c6-arrow.svg',
      width: '35',
      height: '35',
    },
    link: '/salesforce',
  },
];
function ChallengesSlider() {
  return (
    <ProgressSlider>
      {challenges.map((c) => (
        <div key={c.id} className="item">
          <div className="challenge-item">
            <img
              src={`/img/icons/${c.image.src}`}
              width={c.image.width}
              height={c.image.height}
              alt=""
              className="self-start"
            />
            <div className="flex-1 pl-1 md:pl-3">
              <h6 className="font-bold text-20 md:text-22 tracking-[-1px] xl:leading-[30px]">
                {c.title}”
              </h6>
              <ul className="pt-1 list-disc pb-2">
                <li className="text-14 md:text-16 font-medium opacity-90 leading-5 md:leading-7 mt-1">{c.text1}</li>
                <li className="text-14 md:text-16 font-medium opacity-90 leading-5 md:leading-7 mt-1">{c.text2}</li>
                <li className="text-14 md:text-16 font-medium opacity-90 leading-5 md:leading-7 mt-1">{c.text3}</li>
              </ul>

              <a href={c.link} className="font-normal text-16 md:text-16 tracking-[-1px] xl:leading-[30px] hover:underline underline-offset-4">
                Read More →
            </a>
            </div>
          </div>
        </div>
      ))}
    </ProgressSlider>
  );
}

export default ChallengesSlider;
