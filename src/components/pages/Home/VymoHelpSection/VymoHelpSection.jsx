import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../../../Heading/SectionHeading';
import VymoDropDown from './VymoDropDown';
import './VymoHelpSection.scss';
// const ImageComp = (
//   <div className="mt-2 relative p-1 md:p-3 img-comp-container">
//     <img
//       src="/img/help-img1.png"
//       alt=""
//       width="511px"
//       height="466px"
//       className="relative z-0"
//     />
//     <div className="absolute bottom-1/2 right-0 translate-y-1/2 z-[1]">
//       <img
//         src="/img/design-element/thumbs-up.svg"
//         alt=""
//         width="107px"
//         height="60px"
//       />
//     </div>
//     <div className="absolute bottom-1/2 -right-2 translate-y-full hidden lg:block">
//       <img
//         src="/img/design-element/help-border.svg"
//         alt=""
//         width="120px"
//         height="158px"
//       />
//     </div>
//     <div className="absolute w-[calc(100%-16px)] md:w-[calc(100%-48px)] p-2 bottom-[40px] md:bottom-[80px]">
//       <div className="bg-[#F1EFEF] h-5 rounded-[10px] m-4 opacity-70"></div>
//     </div>
//     <div className="absolute w-[calc(100%-16px)] md:w-[calc(100%-48px)] p-2 bottom-[45px] md:bottom-[85px]">
//       <div className="bg-[#F1EFEF] h-5 rounded-[10px] m-2 "></div>
//     </div>
//     <div className="absolute w-[calc(100%-16px)] md:w-[calc(100%-48px)] bottom-1 md:bottom-3 p-2 z-10">
//       <div className="bg-white p-[10px] md:p-2 rounded-[10px]">
//         <p className="opacity-30 text-10 md:text-12 leading-3 text-black time-stamp mb-0 md:mb-2">
//           Mon, 13 Apr, 08:50 PM
//         </p>
//         <div className="flex flex-row items-center">
//           <div className="mr-[11px] doc-icon">
//             <img
//               src="/img/icons/doc-help.svg"
//               width="40px"
//               height="40px"
//               alt=""
//             />
//           </div>
//           <div className="flex-1 ml-0 md:ml-1">
//             <h6 className="font-medium text-12 md:text-14 leading-4 md:leading-3 mt-1">
//               Drop in submissions from{' '}
//               <span className="text-lightBlue md:mr-1">Acme Insurance</span>
//               <span className="bg-primaryRed text-white rounded-full text-10 px-[6.5px] pt-[1.5px] pb-[3px] hidden md:inline-block">
//                 21%{' '}
//                 <svg
//                   width="6"
//                   height="5"
//                   className="inline"
//                   viewBox="0 0 6 5"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     d="M3 4.5L0.834936 0.75L5.16506 0.75L3 4.5Z"
//                     fill="white"
//                   />
//                 </svg>
//               </span>
//             </h6>
//             <p className="p-drop font-medium opacity-30 text-12 m-0 inline">
//               Submission Drop
//             </p>
//             <span className="bg-primaryRed text-white rounded-full text-10 px-[6.5px] pt-[1.5px] pb-[3px] inline-block md:hidden ml-1">
//               21%{' '}
//               <svg
//                 width="6"
//                 height="5"
//                 className="inline"
//                 viewBox="0 0 6 5"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg">
//                 <path
//                   d="M3 4.5L0.834936 0.75L5.16506 0.75L3 4.5Z"
//                   fill="white"
//                 />
//               </svg>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
const helpDropDown = [
  {
    id: 1,
    title: 'Relationship manager',
    description:
      'Deepen client relationships and develop new opportunities effectively.',
    learnMore: '#!',
    icon: {
      src: '/img/icons/bag.svg',
      width: '95',
      height: '88',
    },
    ImageComp: (
      <div className="relative img-container bottom-2 left-3 md:bottom-6 md:left-[42px] lg:bottom-3 lg:left-[42px]">
        <img src="/img/help-1.svg" alt="" />
      </div>
    ),
  },
  {
    id: 2,
    title: 'Wholesalers',
    description:
      'Improve broker book of business and ensure wholesaler productivity',
    learnMore: '#!',
    icon: {
      src: '/img/icons/cube.svg',
      width: '95',
      height: '88',
    },
    ImageComp: (
      <div className="relative img-container bottom-2 left-3 md:bottom-6 md:left-[40px] lg:bottom-3 lg:left-[50px]">
        <img src="/img/help-2.svg" alt="" className="w-[562px]" />
      </div>
    ),
  },
  {
    id: 3,
    title: 'Insurance Agents',
    description:
      "Increase agent's success rates and drive growth profitably across channels.",
    learnMore: '#!',
    icon: {
      src: '/img/icons/doc.svg',
      width: '95',
      height: '88',
    },
    ImageComp: (
      <div className="relative img-container left-0 md:left-[0px] md:bottom-6 lg:bottom-0 lg:left-[20px] md:scale-110 lg:scale-100">
        <img src="/img/help-3.svg" alt="" />
      </div>
    ),
  },
  {
    id: 4,
    title: 'Other Sales',
    description:
      'Increase sales productivity, improve customer happiness, and drive more revenue.',
    learnMore: '#!',
    icon: {
      src: '/img/icons/pie-chart.svg',
      width: '95',
      height: '88',
    },
    ImageComp: (
      <div className="relative img-container bottom-[-50px] md:bottom-[-100px] -left-2 md:scale-110 md:left-[0px] lg:left-[7px] lg:scale-100">
        <img src="/img/help-4.svg" alt="" />
      </div>
    ),
  },
];
function VymoHelpSection() {
  const [open, setOpen] = useState(1);
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section className="section-pad vymo-help-section fade-in" ref={ref}>
      <div className="container z-10">
        <SectionHeading>How Vymo can help</SectionHeading>
        <div className="flex mt-6">
          <div className="w-full md:w-1/2 lg:w-2/5 h-[0%]">
            {helpDropDown.map(({ id, ...props }) => (
              <VymoDropDown
                key={id}
                {...props}
                open={open === id}
                onClick={() => setOpen(id)}
              />
            ))}
          </div>
          <div className="hidden md:flex md:w-2/5 lg:w-3/5 justify-center items-center relative px-3 md:ml-[5%] lg:ml-0">
            <img
              src="/img/help-bg2x.png"
              alt=""
              width="511px"
              height="528px"
              className="absolute z-0 w-full max-w-[511px]"
            />
            {helpDropDown.map((hdd) => (
              <div
                key={hdd.id}
                className={`transition absolute bottom-0  ${
                  (open === hdd.id && 'opacity-100') || 'opacity-0'
                }`}
                style={{ transitionDuration: 1 }}>
                {hdd.ImageComp}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VymoHelpSection;
