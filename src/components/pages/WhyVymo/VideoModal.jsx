import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import TrustedSlider from '../../Slider/TrustedSlider';
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';

export class Modal extends Component {
  
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
        <div>
          <ModalVideo
            channel="youtube" autoplay
            isOpen={this.state.isOpen}
            videoId="_P1xZaaF0o4"
            controls="0"
            onClose={() => this.setState({ isOpen: false })}
          />
          {/*<button onClick={this.openModal}>Open</button>*/}
            <div className="container relative">
              <div className="col-10 offset-1 col-xs-12 mt-1 mb-6 lg:pt-0">
                 <div className="video-bg hidden md:block">
                    <div className="w-full lg:w-1/2 lg:p-5">
                      <h4 className="text-28 md:text-28 text-white leading-[40px] font-light mt-4"><i>Gordon Ritter</i><span className="font-bold"> was one of the first angel investors in Salesforce. Here's why he thinks Vymo is revolutionary</span></h4>
                      <a href="#!"><button className="btn video-ybtn mt-5" onClick={this.openModal}>Watch Video</button></a>
                    </div>
                    <div className="w-full lg:w-1/2"></div>
                 </div>
                 <a href="#!" className="img-hv md:hidden" onClick={this.openModal}><img src="/img/why/future-of-software.webp" width="100%" alt="the future of sales"/></a>
              </div>
            </div>
            <div className="lg:pt-2 pb-6 mb-4">
              <p className="text-16 md:text-18 font-medium text-center md:my-4 lg:mt-6 lg:mb-4">
                Trusted by the World’s leading Financial Institutions
              </p>
              <TrustedSlider />
            </div>
        </div>
      </div>

    );
  }
}




export default Modal;
