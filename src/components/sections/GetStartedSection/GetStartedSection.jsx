import React from 'react';
import './GetStartedSection.scss';
const linkCards = [
  {
    id: 1,
    title: 'Get started',
    description: 'Start using Vymo for enterprise and grow revenue',
    link: '#!',
  },
  {
    id: 2,
    title: 'See how it works',
    description: 'Learn about how Vymo works for you',
    link: '#!',
  },
  {
    id: 3,
    title: 'Get Pricing',
    description: 'Get in touch with our team and get a quote',
    link: '#!',
  },
];
function GetStartedSection() {
  return (
    <section className="bg-darkblack get-started-section">
      <div className="container">
        <div className="flex flex-col md:flex-row link-card-container">
          {linkCards.map((lc) => (
            <div className="link-col" key={lc.id}>
              <a
                className="pt-4 pr-1 pb-2 pl-3 relative flex-1 flex justify-between flex-row link-card"
                href={lc.link}>
                <div>
                  <h3 className="text-22 text-white font-bold leading-7 tracking-[-1px]">
                    {lc.title}
                  </h3>
                  <p className="text-14 md:text-16 text-white opacity-60 leading-[21px] md:leading-7 mt-0 md:mt-1">
                    {lc.description}
                  </p>
                </div>
                <img
                  src="/img/icons/link-arrow.svg"
                  className="-mt-2 self-start"
                  height="34px"
                  width="34px"
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GetStartedSection;
