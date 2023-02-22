import React from 'react';
import SectionHeading from '../../Heading/SectionHeading';
const based = [
  {
    id: 1,
    text: 'Lead source',
    img: 'dark-zap.svg',
  },
  {
    id: 2,
    text: 'Product type',
    img: 'in-star.svg',
  },
  {
    id: 3,
    text: 'Round-robin',
    img: 'grass.svg',
  },
  {
    id: 4,
    text: 'Rep Location',
    img: 'c4-stair.svg',
  },
  {
    id: 5,
    text: 'Virtual vs in-person',
    img: 'cosmos.svg',
  },
  {
    id: 6,
    text: 'Push and pull',
    img: 'c6-arrow.svg',
  },
  {
    id: 7,
    text: 'Rep Availability',
    img: 'c2-circle.svg',
  },
  {
    id: 8,
    text: 'Rep Success Metrics',
    img: 'abstract-tray.svg',
  },
  {
    id: 9,
    text: 'Rep Responsiveness',
    img: 'c3-star.svg',
  },
];
function AllocationSection() {
  return (
    <section className="relative section-pad bg-lightWhite allocation-section">
      <div className="container">
        <div className="row">
          <div className="col-md col-10 offset-1 mb-3 md:mb-6">
            <SectionHeading>
              Vymo’s ML algorithms offer the most personalized allocation, with
              allocation capabilities based on
            </SectionHeading>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-stretch md:items-center mx-[-15px] md:mx-[-12px]">
          {based.map((b) => (
            <div className="tablet" key={b.id}>
              <img src={`/img/icons/${b.img}`} alt={b.text} width="35" height="35" />
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllocationSection;
