import React from 'react';
import ProgressSlider from './ProgressSlider';
const challenges = [
  {
    id: 1,
    title: 'Reliable data',
    text: 'I don’t know what my sales reps are doing as I don’t have reliable sales activity data',
    image: {
      src: 'c1-star.svg',
      width: '35',
      height: '35',
    },
  },
  {
    id: 2,
    title: 'Customer Support',
    text: 'Are my best customers getting the attention they need from my sales reps?',
    image: {
      src: 'c2-circle.svg',
      width: '35',
      height: '35',
    },
  },
  {
    id: 3,
    title: 'Reducing churn',
    text: 'I want to figure out which sales reps are at a risk of attrition and how I can prevent it.',
    image: {
      src: 'c3-star.svg',
      width: '35',
      height: '35',
    },
  },
  {
    id: 4,
    title: 'Increased engagement',
    text: 'How can we cross-sell opportunities to our customers and increase business from intermediaries to optimize engagement?',
    image: {
      src: 'c4-stair.svg',
      width: '35',
      height: '35',
    },
  },
  {
    id: 5,
    title: 'Better lead management',
    text: 'Can I assign the right leads to the right sales reps and increase our chances of conversion?',
    image: {
      src: 'c5-zap.svg',
      width: '35',
      height: '37',
    },
  },
  {
    id: 6,
    title: 'Efficient onboarding',
    text: 'How can I onboard my sales reps efficiently and enable them to succeed?',
    image: {
      src: 'c6-arrow.svg',
      width: '35',
      height: '35',
    },
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

export default ChallengesSlider;
