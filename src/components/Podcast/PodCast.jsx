import React from 'react';
import Button from '../Button/Button';
import SectionHeading from '../Heading/SectionHeading';
import PodCastCard from './PodCastCard';

const podCast = [
  {
    id: 0,
    time: '23mins',
    image: '/img/podcasts/podcast-1.png',
    title: 'Four tips to boost remote banking sales productivity!',
    url: '!#',
  },
  {
    id: 1,
    time: '36mins',
    image: '/img/podcasts/podcast-2.png',
    title: 'How Can Bancassurance Uplevel Its Gameplan for Growth?',
    url: '!#',
  },
  {
    id: 2,
    time: '18mins',
    image: '/img/podcasts/podcast-3.png',
    title: 'Turnaround Your Lead Allocation Process With Vymo',
    url: '!#',
  },
];
function PodCast() {
  return (
    <>
      <SectionHeading className="mb-3 md:mb-6">Podcasts</SectionHeading>
      <div className="flex flex-wrap">
        {podCast.map((d) => (
          <div className="w-full md:w-1/2 xl:w-1/3" key={d.id}>
            <PodCastCard {...d} />
          </div>
        ))}
      </div>

      <div className="w-full text-center mt-3 md:mt-6">
        <Button large>View all</Button>
      </div>
    </>
  );
}

export default PodCast;
