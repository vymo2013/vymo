import React from 'react';
import ProgressSlider from './ProgressSlider';

const cards = [
  {
    id: 1,
    title: 'Superfast Onboarding',
    text: null,
    list: [
      {
        id: 1,
        text: 'Easily verify license and product line information of agencies without leaving the Vymo Mobile App',
      },
      {
        id: 2,
        text: 'Check errors & omissions policy, collect payment information',
      },
    ],
    image: {
      src: 'onboarding.png',
      width: '370',
      height: '262',
    },
  },
  {
    id: 2,
    title: 'Improve Agency Topline',
    text: null,
    list: [
      {
        id: 1,
        text: 'Assign courses / share collateral to educate the agency on carrier product lines to ramp them up in no-time',
      },
      {
        id: 2,
        text: 'View business metrics on Vymo’s Wholesaler360 to flag dips in subs / binds ratios, renewals & more.',
      },
    ],
    image: {
      src: 'topline.png',
      width: '370',
      height: '262',
    },
  },
  {
    id: 3,
    title: 'Help agencies thrive',
    text: null,
    list: [
      {
        id: 1,
        text: 'Vymo nudges the wholesaler on critical moments like when an agency’s license is about to expire',
      },
      {
        id: 2,
        text: 'Wholesalers can conduct various meetings: new product training, ATL/BTL, Case Consultation Meetings, etc.',
      },
    ],
    image: {
      src: 'thrive.png',
      width: '370',
      height: '262',
    },
  },
  {
    id: 4,
    title: 'Coach Wholesalers effectively',
    text: 'Vymo helps you with answers to:',
    list: [
      {
        id: 1,
        text: 'Arey my wholesalers completing all their activities?',
      },
      {
        id: 2,
        text: 'Arey they successful in converting agents?',
      },
    ],
    image: {
      src: 'onboarding.png',
      width: '370',
      height: '262',
    },
  },
];
function WholeSalerSlider() {
  return (
    <ProgressSlider>
      {cards.map((c) => (
        <div key={c.id} className="item">
          <div className="experience-item">
            <img
              className="w-full"
              src={`/img/use-cases/${c.image.src}`}
              width={c.image.width}
              height={c.image.height}
              alt=""
            />
            <div className="flex-1 mt-3">
              <h6 className="font-bold text-20 md:text-22 tracking-[-1px] mb-2">
                {c.title}
              </h6>
              {c.text && (
                <p className="text-14 md:text-16 font-medium opacity-60 leading-5 md:leading-7 mt-1">
                  {c.text}
                </p>
              )}
              <ul className="list-disc pl-2">
                {c.list.map((i) => (
                  <li
                    key={i.id}
                    className="text-16 leading-7 text-black opacity-60 font-medium">
                    {i.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </ProgressSlider>
  );
}

export default WholeSalerSlider;
