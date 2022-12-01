import React from 'react';
import PropTypes from 'prop-types';
function CaseStudyCard({ backgroundImage, logo, title, description, link }) {
  return (
    <div className="case-study-card">
      <div className="h-[200px] md:h-[270px] max-h-[270px] w-full rounded-2xl flex justify-center items-center relative overflow-hidden">
        <img
          src={backgroundImage}
          alt=""
          className="object-cover absolute z-0 w-full h-full"
        />
        <div className="dark-overlay"></div>
        <img alt="" {...logo} className="z-[1]" />
      </div>
      <h3 className="pt-2 md:pt-3 pb-1 font-bold text-22 leading-8 tracking-[-1px]">
        {title}
      </h3>
      <p className="mb-1 pb-0 md:pb-2 text-16 leading-7 opacity-60 text-black font-medium">
        {description}
      </p>
      <a href={link} className="link-text">
        View case study
      </a>
    </div>
  );
}
CaseStudyCard.propTypes = {
  backgroundImage: PropTypes.string,
  logo: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};
export default CaseStudyCard;
