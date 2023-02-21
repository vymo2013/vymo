import * as React from 'react';
import Button from '../../Button/Button';
import SectionHeading from '../../Heading/SectionHeading';

function HeroSection() {
  return (

    <section className="relative hero-section error-page">
      <div className="container mt-3 lg:mt-[0px]">
        <div className="row mt-2 lg:mt-2 lg:mb-2 pt-4 pb-2 mb-4">

          <div className="w-full md:w-1/2 relative mt-6 lg:mt-6 pt-4">
            <h1 
              className="text-left mx-auto text-32 leading-[44px] md:text-60 lg:mt-4 pt-6 font-iight md:leading-[68px]">
              <span className="font-bold">Ooops! You weren't supposed</span> <i> to see this</i>
            </h1>

            <p className="text-left text-darkPurple font-normal leading-5 md:leading-7 mt-3 mb-3 mx-auto md:text-18">
              The page you are looking for no longer exists. Return to the <span className="d-bck"><a href="/" className="text-underline">home page</a> and remember: you have not seen anything.</span>
            </p>

            <a href="/"><Button className="mt-1 md:mt-2 started-btn red-btn">
              Back to Home →
            </Button></a>

            <div className="w-auto flex flex-row mt-4 pt-4">
                <a href="https://twitter.com/getvymo" target="_blank" className="hover:opacity-80">
                  <img
                    src="/img/icons/twitter.svg"
                    alt=""
                    width="34px"
                    height="34px"
                  />
                </a>
                <a href="https://www.youtube.com/@VymoInc" className="hover:opacity-80 ml-2" target="_blank">
                  <img
                    src="/img/icons/youtube.png"
                    alt=""
                    width="36px"
                    height="36px"
                  />
                </a>
                <a href="linkedin.com/company/vymo/" className="hover:opacity-80 ml-2" target="_blank">
                  <img
                    src="/img/icons/linkedin.svg"
                    alt=""
                    width="34px"
                    height="34px"
                  />
                </a>
              </div>

          </div>

          <div className="w-full md:w-1/2 overflow-hidden">
               <img src="/img/404.webp" width="100%" className="hidden md:block lg:mt-4 pt-2"/>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default HeroSection;
