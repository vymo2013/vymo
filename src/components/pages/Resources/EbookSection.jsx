import React, { useEffect } from 'react';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import SectionHeading from '../../Heading/SectionHeading';
// gsap.registerPlugin(ScrollTrigger);

const books = [
  {
    key: 0,
    heading: 'The Grit Volume II.',
    image: '/img/books/book-1.png',
    text: 'After 50,000+ reads of The Grit interviews, here’s the second season of exclusive interviews about design.',
  },
];
function EbookSection() {
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    const mm = gsap.matchMedia();
    const dragger = document.querySelector('#dragger');
    const ring = document.querySelector('#ring');
    const tl = gsap.timeline();
    let xPos = 0;
    const animate = () => {
      const rotation = Math.round(gsap.getProperty(ring, 'rotationY') / 36);
      gsap.to(ring, {
        rotationY: rotation * 36,
        ease: 'Power2.easeOut',
      });
      let index = Math.abs(rotation) % 10;
      if (rotation > 0) {
        index = 10 - index;
      }
      index %= 10;
      const active = `.book-content:nth-child(${index + 1})`;

      tl.to('.book-content', {
        opacity: 0,
        y: 120,
        duration: 0.125,
      });

      const child = document.querySelector(active);

      tl.fromTo(
        child,
        { opacity: 0, y: 120 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          width: '100%',
          ease: 'expo.inOut',
        },
      );
    };

    mm.add('(max-width:768px)', () => {
      animate();
      gsap.set('.book', {
        transformOrigin: 'center',
        transform: (i) => `rotateY(${i * 36}deg) translateZ(400px)`,
      });
      gsap.set('.book-content', {
        opacity: 0,
        y: 120,
      });
    });
    mm.add('(min-width:768px) and (max-width:1023px)', () => {
      animate();
      gsap.set('.book', {
        transformOrigin: 'center',
        transform: (i) => `rotateY(${i * 36}deg) translateZ(600px)`,
      });
      gsap.set('.book-content', {
        opacity: 0,
        y: 120,
      });
    });
    mm.add('(min-width:1024px)', () => {
      animate();
      gsap.set('.book', {
        transformOrigin: 'center',
        transform: (i) => `rotateY(${i * 36}deg) translateZ(900px)`,
      });
      gsap.set('.book-content', {
        opacity: 0,
        y: 120,
      });
    });

    Draggable.create(dragger, {
      onDragStart: (e) => {
        if (e.touches) e.clientX = e.touches[0].clientX;
        xPos = Math.round(e.clientX);
      },

      onDrag: (e) => {
        if (e.touches) e.clientX = e.touches[0].clientX;

        gsap.to(ring, {
          rotationY: `+=${(Math.round(e.clientX) - xPos) % 360}`,
        });

        xPos = Math.round(e.clientX);
      },

      onDragEnd: () => {
        animate();
        gsap.set(dragger, { x: 0, y: 0 }); // reset drag layer
      },
    });

    return () => {
      tl.kill();
      mm.kill();
    };
  }, []);
  return (
    <section className="relative ebook-section overflow-hidden">
      <SectionHeading className="mb-3 md:mb-6">E-books</SectionHeading>
      <div className="book-container">
        <div id="ring">
          {new Array(10).fill(books[0]).map((b, i) => (
            <span className="book" key={`${b.key + i}`}>
              <img src={b.image} alt="" className="book-img" />
            </span>
          ))}
        </div>
        <div id="dragger"></div>
      </div>
      {/* <div className="vignette"></div> */}
      <div className="content-container  z-[1200] relative">
        {new Array(10).fill(books[0]).map((b, i) => (
          <div className="book-content select-none" key={`${b.key + i}`}>
            <h3 className="text-22 leading-8 font-bold">
              {i + 1} {b.heading}
            </h3>
            <p className="text-14 leading-6 font-medium opacity-60 ">
              {b.text}
            </p>
            <a href="!#" className="text-purple text-14 font-medium leading-6">
              Read book
              <img
                className="inline-block ml-0.5"
                src="/img/icons/arrow-right.svg"
                width="15"
                height="15"
                alt=""
              />
            </a>
          </div>
        ))}
      </div>
      {/* <div id="dragger"></div> */}
    </section>
  );
}

export default EbookSection;
