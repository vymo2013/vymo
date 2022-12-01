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
    name: 'Tom Ulrich',
    designation: 'President - Vymo Japan',
    img: 'tom.png',
    width: '440px',
    height: '468px',
  },
  {
    id: 4,
    name: 'Shigeru Harasawa',
    designation: 'VP - Sales',
    img: 'sujay.png',
    width: '181px',
    height: '295px',
  },
  {
    id: 5,
    name: 'Rajesh Sabhlok',
    designation: 'President - Vymo Japan',
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
