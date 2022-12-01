import React from 'react';
import Blogs from '../../Blogs/Blogs';
import CaseStudies from '../../CaseStudies/CaseStudies';
import News from '../../News/News';
import PodCast from '../../Podcast/PodCast';
import Scrollspy from '../../Scrollspy';
import Webinars from '../../Webinars/Webinars';
import EbookSection from './EbookSection';

function ScrollableSection() {
  return (
    <Scrollspy centeredLinks defaultSection="news">
      <section data-spy-title="News" data-spy-id="news" className="section-pad">
        <div className="container">
          <News />
        </div>
      </section>
      <section
        data-spy-title="Case Studies"
        data-spy-id="case-studies"
        className="section-pad bg-lightWhite relative">
        <CaseStudies />
      </section>
      <section
        data-spy-title="Webinars"
        data-spy-id="webinars"
        className="section-pad relative">
        <div className="container">
          <Webinars />
        </div>
      </section>
      <section
        data-spy-title="Blogs"
        data-spy-id="blogs"
        className="section-pad bg-lightWhite">
        <div className="container">
          <Blogs />
        </div>
      </section>
      <section
        data-spy-title="E-Books"
        data-spy-id="ebooks"
        className="relative  overflow-hidden section-pad">
        <EbookSection />
      </section>
      <section
        data-spy-title="Podcasts"
        data-spy-id="podcasts"
        className="section-pad bg-lightWhite">
        <div className="container">
          <PodCast />
        </div>
      </section>
    </Scrollspy>
  );
}

export default ScrollableSection;
