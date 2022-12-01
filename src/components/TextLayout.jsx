import React from 'react';
import PropTypes from 'prop-types';

function TextLayout({ title, content, date }) {
  return (
    <section className="relative p-section-1">
      <div className="container">
        <h1 className="text-36 md:text-64 tracking-[-2px] leading-[44px] md:leading-[80px] font-bold mt-6 font-objectivity">
          {title}
        </h1>
        <div className="text-16 leading-7 mt-1 mb-3 md:mb-4.5 font-medium text-darkPurple opacity-60">
          {date}
        </div>
      </div>
      <hr className="text-black" />
      <div className="container">
        <div className="text-16 leading-7 pt-3 md:pt-5 font-medium text-black opacity-50">
          {content}
        </div>
      </div>
    </section>
  );
}
TextLayout.defaultProps = {
  title: '',
  content: '',
  date: '',
};
TextLayout.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
export default TextLayout;
