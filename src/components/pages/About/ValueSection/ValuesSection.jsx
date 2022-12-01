import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../../../Button/Button';
import DropDown from '../../../DropDown/DropDown';
import SectionHeading from '../../../Heading/SectionHeading';
import ValueCard from './ValueCard';
const vymoValues = [
  {
    id: 1,
    title: "Own what you do even when nobody's watching",
    description: "Top-quality work shouldn't need supervision",
    src: 'focus.svg',
    width: '325',
    height: '253',
    classNames: {
      image: 'absolute top-[-230px] right-[-40px]',
      titleCard: 'w-[402px] top-[-150px]  lg:left-0 xl:left-[-180px]',
    },
  },
  {
    id: 2,
    title: 'When it comes to quality, the buck stops with you',
    description:
      "We make our work reliable, do what we do well, and proactively act to make sure we're delivering the best quality possible",
    src: 'deliver.svg',
    width: '303',
    height: '272',
    classNames: {
      image: 'absolute top-[125px] left-[-100px]',
      titleCard: 'w-[508px] top-[200px] right-[-140px]',
    },
  },
  {
    id: 3,
    title: 'Obsess over delivering value to customers',
    description:
      'Every person on our team thinks about our customers first, the rest second',
    src: 'think.svg',
    width: '276',
    height: '289',
    classNames: {
      image: 'absolute top-[417px] left-[444px]',
      titleCard: 'w-[388px] top-[542px]  lg:left-0 xl:left-[-180px]',
    },
  },
  {
    id: 4,
    title: 'Be respectful and earn trust',
    description:
      'We believe that staying respectful and calm through any situation is the best way to earn trust — be it from our stakeholders or customers',
    src: 'wedo.svg',
    width: '312',
    height: '260',
    classNames: {
      image: 'absolute top-[800px] left-[-50px]',
      titleCard: 'w-[508px] top-[900px] right-[-140px]',
    },
  },
  {
    id: 5,
    title: 'Innovate iteratively and constantly',
    description:
      'We’re not happy staying idle. We learn what our customers want and innovate to provide best value',
    src: 'fix.svg',
    width: '285',
    height: '255',
    classNames: {
      image: 'absolute bottom-[162px] left-[-29px]',
      titleCard: 'w-[508px] top-[1180px] right-[-140px]',
    },
  },
];
function ValuesSection() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (entry) entry.target.classList.add('fade-in-view');
  }, [inView]);
  return (
    <section
      className="relative pb-6 md:pb-7 bg-lightWhite pt-[100px] md:pt-[100px] lg:pt-[300px] mt-[-130px] md:mt-[-195px] lg:mt-[-270px] xl:mt-[-310px] z-0 fade-in"
      ref={ref}>
      <SectionHeading>Vymo Values</SectionHeading>
      <p className="text-black opacity-60 leading-5 md:leading-7 text-center font-medium mb-[50px]">
        Our values are - What we believe in, what we are and what we want to be.
      </p>
      <div className="container hidden lg:block">
        <div
          style={{
            background: 'url(/img/design-element/about-curve-path.svg)',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-[768px] h-[1562px] relative mx-auto lg:mr-[12%] xl:mr-[16%] mt-0 md:mt-[350px]">
          {vymoValues.map((v) => (
            <img
              key={`img-${v.id}`}
              src={`/img/about/${v.src}`}
              width={v.width}
              height={v.height}
              alt=""
              className={v.classNames.image}
            />
          ))}
          {vymoValues.map((v) => (
            <ValueCard
              key={`card-${v.id}`}
              className={v.classNames.titleCard}
              title={v.title}
              description={v.description}
            />
          ))}
        </div>
      </div>

      <div className="container block lg:hidden">
        <DropDown
          data={vymoValues.map((v) => ({
            id: v.id.toString(),
            title: (
              <h3 className="flex-1 inline font-bold text-22 leading-[32px] tracking-[-1px] my-2">
                {v.title}
              </h3>
            ),
            content: (
              <>
                <p className="font-medium text-16 leading-6 opacity-50 text-black">
                  {v.description}
                </p>
                <img
                  src={`/img/about/${v.src}`}
                  width={v.width}
                  height={v.height}
                  alt=""
                />
              </>
            ),
          }))}
        />
      </div>
      <div className="text-center mt-4 lg:mt-0">
        <Button className="w-[163px] lg:w-[275px] xl:w-[200px]">
          View more
        </Button>
      </div>
    </section>
  );
}

export default ValuesSection;
