import React from 'react';
import SectionHeading from '../Heading/SectionHeading';
import CaseStudyCard from './CaseStudyCard';
import './CaseStudies.scss';
import Button from '../Button/Button';
const caseStudes = [
  {
    id: 0,
    backgroundImage: 'case-1.png',
    logo: {
      src: 'clogo-1.svg',
      alt: 'Gartner',
    },
    title: 'Improving Lead Funnel Efficiency for Varthana Finance',
    description:
      'Sales reps are expected to feed all activity data onto complicated systems of records for what is, essentially, an inspection tool for Managers.',
    link: '!#',
  },
  {
    id: 1,
    backgroundImage: 'case-2.png',
    logo: {
      src: 'clogo-2.svg',
      alt: 'Swiggy',
    },
    title: 'Accelerating Customer Acquisition Through Mobility for Swiggy',
    description:
      'Sales reps are expected to feed all activity data onto complicated systems of records for what is, essentially, an inspection tool for Managers.',
    link: '!#',
  },
  {
    id: 2,
    backgroundImage: 'case-3.png',
    logo: {
      src: 'clogo-3.svg',
      alt: 'Treebo',
    },
    title:
      'Helping Treebo Deal with Rapid Growth and Improving Lead Management',
    description:
      'Sales reps are expected to feed all activity data onto complicated systems of records for what is, essentially, an inspection tool for Managers.',
    link: '!#',
  },
  {
    id: 3,
    backgroundImage: 'case-4.png',
    logo: {
      src: 'clogo-4.svg',
      alt: 'SBI',
    },
    title:
      "Improving Net Business Outcomes for India's Largest Private Banking Group",
    description:
      'Sales reps are expected to feed all activity data onto complicated systems of records for what is, essentially, an inspection tool for Managers.',
    link: '!#',
  },
];
function CaseStudies() {
  return (
    <div className="container">
      <SectionHeading className="mb-3">Case Studies</SectionHeading>
      <div className="flex flex-wrap mx-[-15px]">
        {caseStudes.map((c) => (
          <div
            className="w-full md:w-1/2 px-2 md:px-3 py-[20px] md:py-[40px]"
            key={c.id}>
            <CaseStudyCard
              {...c}
              backgroundImage={`/img/resources/${c.backgroundImage}`}
              logo={{
                ...c.logo,
                src: `/img/resources/${c.logo.src}`,
              }}
            />
          </div>
        ))}
        <div className="w-full text-center mt-[20px] md:mt-3">
          <Button large>View all</Button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
