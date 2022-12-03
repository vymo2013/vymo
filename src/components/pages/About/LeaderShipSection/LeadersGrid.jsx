import React from 'react';
import LeaderCard from './LeaderCard';
const leaders = [
  {
    id: 1,
    name: 'Yamini Bhat',
    designation: 'Co-Founder & CEO',
    img: 'yamini.png',
    width: '407px',
    height: '446px',
  },
  {
    id: 2,
    name: 'Venkat Malladi',
    designation: 'Co-Founder & CTO',
    img: 'venkat.png',
    width: '395px',
    height: '446px',
  },
  {
    id: 3,
    name: 'Harish Vaidyanathan',
    designation: 'VP Product',
    img: 'harish.png',
    width: '440px',
    height: '468px',
  },
  {
    id: 4,
    name: 'Roshan Cariappa',
    designation: 'VP - Marketing',
    img: 'roshan.png',
    width: '411px',
    height: '465px',
  },
  {
    id: 5,
    name: 'Rajesh Sabhlok',
    designation: 'MD – Asia Pacific & Japan',
    img: 'rajesh.png',
    width: '410px',
    height: '446px',
  },
];
function LeadersGrid() {
  return (
    <div className="container">
      <div className="flex flex-wrap -mx-2">
        {leaders.map((l) => (
          <LeaderCard key={l.id} {...l} img={`/img/about/${l.img}`} />
        ))}
      </div>
    </div>
  );
}

export default LeadersGrid;
