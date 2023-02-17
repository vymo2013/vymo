import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Dialog from '../../../Dialog/Dialog';
import SectionHeading from '../../../Heading/SectionHeading';
import UserTag from '../../../UserTag/UserTag';
import InsightsCard from './InsightsCard';
// import ModalVideo from '../../../VideoModal';



const insights = [
  {
    id: 1,
    title: 'Winning Behaviours',
    text: 'Identify the best practices of your star performers and nudge the rest of your team towards winning behaviours',
    after: null,
    icon: 'why-cube.svg',
    dialog: (
      <Dialog
        minutes="45"
        text={
          <p className="text-12 leading-[18px] font-medium tracking-[-0.5px]">
            Calling new lead <b>Linda</b> within 2 hours will increase your
            chance of conversion by <b>50%</b>{' '}
            <svg
              className="inline"
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M5 0L9.33013 7.5H0.669873L5 0Z" fill="#42AF8F" />
            </svg>
          </p>
        }
        icon={{
          src: '/img/why/profile-1.png',
          width: '42px',
          height: '42px',
        }}
      />
    ),
    color: 'blue',
  },
  {
    id: 2,
    title: 'Personal Assistant',
    text: 'Get a single plane of glass view into all your activities so you can plan, schedule & prioritise your week for maximum productivity and efficiency',
    after: (
      <UserTag
        className="absolute top-[60px] right-0 translate-x-1/2 peter-tag"
        avatar={{
          src: '/img/why/peter.png',
          width: '33',
          height: '33',
        }}
        name="Peter Mckinnon"
        shadow
        designation="Potential Lead"
      />
    ),
    icon: 'why-bag.svg',
    dialog: (
      <Dialog
        text={
          <p className="text-12 leading-[18px] font-medium tracking-[-0.5px]">
            Meet <b>Dave Jacksone</b> today. His renewal is due in a month.
          </p>
        }
        icon={{
          src: '/img/why/profile-2.png',
          width: '42px',
          height: '42px',
        }}
        progress={{
          complete: 60,
          unfinished: 15,
        }}
      />
    ),
    color: 'yellow',
  },
  {
    id: 3,
    title: 'Personal Coach',
    text: 'Gain visibility into the activities, goals, and skill gaps of your team and intervene proactively through intelligent nudges, suggestions, and comprehensive data',
    after: (
      <img
        className="absolute left-1/2  -translate-x-3 personal-curve mt-2"
        src="/img/why/arrow-vector.svg"
        width="178"
        height="197"
        alt="arrow vector"
      />
    ),
    icon: 'why-piechart.svg',
    dialog: (
      <Dialog
        minutes="45"
        text={
          <p className="text-12 leading-[18px] font-medium tracking-[-0.5px]">
            Here is an <b>engagement summary with Acme</b> to prep for your
            business review call
          </p>
        }
        icon={{
          src: '/img/why/profile-3.png',
          width: '42px',
          height: '42px',
        }}
      />
    ),
    color: 'red',
  },
  {
    id: 4,
    title: 'User Journeys',
    text: 'Create collaborative persona-based workflows for all your sales reps so they can drive conversion and increase engagement',
    after: null,
    icon: 'why-doc.svg',
    dialog: (
      <Dialog
        minutes="45"
        text={
          <p className="text-12 leading-[18px] font-medium tracking-[-0.5px]">
            As a follow-up to your call with <b>Noah James</b>, click to send
            this <b>product brochure</b>
          </p>
        }
        icon={{
          src: '/img/why/profile-4.png',
          width: '42px',
          height: '42px',
        }}
        actionButton={<div className="send-btn">Send</div>}
      />
    ),
    color: 'green',
  },
];


function TransformingSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
  
    <section className="relative why-transforming-section" ref={ref}>
      <div className="container">
        <h2 className="mb-5 md:mb-6 text-48 font-light text-center leading-[64px] m-font-head">
          <span className="font-bold">Transforming data into</span> <span className="d-bck"><i>intelligent insights</i></span>
        </h2>
        <div className="row insights-bg">
          {insights.map((i) => (
            <div className="col-md col-5" key={i.id}>
              <InsightsCard {...i} icon={`/img/icons/${i.icon}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TransformingSection;
