import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import '../../../../../node_modules/react-modal-video/scss/modal-video.scss';
import Button from '../../../Button/Button';
import SectionHeading from '../../../Heading/SectionHeading';

export class HeroSection extends Component {
  
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
        <div>
          <ModalVideo
            channel="youtube" autoplay
            isOpen={this.state.isOpen}
            videoId="_P1xZaaF0o4"
            controls="0"
            onClose={() => this.setState({ isOpen: false })}
          />
          <section className="relative section-pad bg-lightBg2 hero-section overflow-hidden">
            <div className="container mt-4 md:mt-6 xl:mt-6">
              <div className="flex flex-wrap">
                <div className="w-full xl:w-[48%] text-center xl:text-left xl:mt-4">

                <h1
                    className="mx-auto text-36 md:text-48 leading-[38px] lg:mt-1 font-iight md:leading-[62px]">
                    <span className="font-bold">Enhance the</span> <i>Wholesaler Experience</i> <span className="font-bold">and Create Profitable Agencies</span>.
                  </h1>

                  <p className="text-darkPurple font-medium opacity-85 leading-5 md:leading-7 mt-2">
                    On a day-to-day basis, insurance wholesalers need to manage multiple interests, swifty onboard their agencies, and be a trusted partner 
                    to everyone in their network. Not to mention, they need to stay on top of their performance. Vymo makes their lives easier by helping 
                    them onboard, grow, retain and manage their agencies efficiently and automatically.
                  </p>
                  <Button className="mt-1 md:mt-2 started-btn red-btn">Get Started</Button>
                </div>
                <div className="w-full xl:w-[52%] select-none mt-[-82px] xl:mt-0">
                  <div className="relative bottom-[-82px] xl:bottom-0 xl:absolute xl:h-[682px] xl:w-[820px]">
                    <img
                      // width="1289"
                      // height="1022"
                      // width="1120"
                      height="682"
                      className="h-full"
                      src="/img/use-cases/hero-bg2.png"
                      alt="wholesaler banner"
                    />
                      <a href="#!" onClick={this.openModal}><div className="play-button top-[-140px] left-[28%]">
                        <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 10.268C21.3333 11.0378 21.3333 12.9623 20 13.7321L3.5 23.2583C2.16667 24.0281 0.5 23.0659 0.5 21.5263V2.47372C0.5 0.934118 2.16667 -0.0281307 3.5 0.74167L20 10.268Z"
                          fill="white"
                        />
                      </svg>
                    </div></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}

export default HeroSection;
