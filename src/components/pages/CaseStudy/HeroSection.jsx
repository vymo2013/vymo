import React from 'react';
import SectionHeading from '../../Heading/SectionHeading';

function HeroSection() {
  return (
    <section className="relative case-study-hero-section">
      <div className="container text-center">
        <div className="w-full md:w-3/4 md:mx-auto pt-6">
          <SectionHeading>
            Improving Lead Funnel Efficiency for HDFC Life Insurance
          </SectionHeading>
          <p className="text-16 leading-7 opacity-60 text-black font-medium mt-2 mb-3">
            Varthana aims to meet the needs of affordable private school owners
            by providing loan capital so they can expand their infrastructure,
            invest in teacher-training, and introduce new learning.
          </p>
        </div>

        <div className="relative max-h-[650px] mt-0 lg:mt-[173px] mb-[57px] lg:mb-0">
          <div className="bg-white bg-opacity-70 rounded-lg md:rounded-3xl matric-container">
            <div className="matric-card">
              <h3 className="text-32 lg:text-60 text-black font-bold">
                70{' '}
                <span className="md:-ml-2">
                  %{' '}
                  <svg
                    className="icon"
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L17.6603 15H0.339746L9 0Z" fill="#42AF8F" />
                  </svg>
                </span>{' '}
              </h3>
              <p className="text-12 md:text-16 text-black opacity-60 font-medium">
                Increase in leads sourced per RM per day
              </p>
            </div>
            <div className="matric-card">
              <h3 className="text-32 lg:text-60 text-black font-bold">
                54{' '}
                <span className="md:-ml-2">
                  %{' '}
                  <svg
                    className="icon"
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 15L0.339745 0L17.6603 0L9 15Z" fill="#FF5A5F" />
                  </svg>
                </span>
              </h3>
              <p className="text-12 md:text-16 text-black opacity-60 font-medium">
                Decrease in leads dropped
              </p>
            </div>
            <div className="matric-card">
              <h3 className="text-32 lg:text-60 text-black font-bold">
                2.8{' '}
                <span className="md:-ml-2">
                  x{' '}
                  <svg
                    className="icon"
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L17.6603 15H0.339746L9 0Z" fill="#42AF8F" />
                  </svg>
                </span>
              </h3>
              <p className="text-12 md:text-16 text-black opacity-60 font-medium">
                Increase in activities per RM per day
              </p>
            </div>
          </div>
          <img
            className="object-cover rounded-3xl select-none min-h-[300px]"
            src="/img/case-study/hero-bg.png"
            width="1270"
            height="646"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
