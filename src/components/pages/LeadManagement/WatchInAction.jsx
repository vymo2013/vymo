import React, { useRef, useState } from 'react';

import Button from '../../Button/Button';

function WatchInAction() {
  const [playVisible, setPlayVisible] = useState(true);
  const videoRef = useRef();
  const onPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlayVisible(false);
    }
  };
  return (
    <section className="section-pad">
      <div className="container">
        <h2 className="text-28 md:text-48  tracking-[-1px] md:tracking-[-2px] md:leading-[64px] leading-9 font-bold text-center mb-5">
          See How We Work in Action!
        </h2>

        <div className="relative mb-5">
          <video
            ref={videoRef}
            muted
            // autoPlay
            // playsInline
            // loop
            width="1280"
            height="720"
            controls={!playVisible}
            className="inset-video w-full rounded-2xl md:rounded-3xl"
            poster="/img/lead-management/how-we-work-thumbnail.jpg">
            <source src="/img/lead-management/work.mp4" type="video/mp4" />
          </video>
          {playVisible && (
            <div className="text-center absolute inset-0 m-auto flex justify-center items-center flex-col">
              <button
                className="play-button rounded-full inline-flex justify-center items-center"
                type="button"
                onClick={onPlay}>
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none">
                  <path d="M24 13.5.75 26.923V.077L24 13.5Z" fill="#fff" />
                </svg>
              </button>
              <span className="block font-medium mt-3 text-white text-16">
                Watch the Film
              </span>
            </div>
          )}
        </div>

        <div className="text-center">
          <Button href="#!">
            Get Started now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WatchInAction;
