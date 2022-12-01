import React from 'react';
import PropTypes from 'prop-types';
function BlogCard({ image, title, description }) {
  return (
    <div className="flex flex-col bg-white p-1.5 md:p-2 rounded-3xl  border border-fluff">
      <div className="h-[230px] relative w-full rounded-2xl md:rounded-b-none overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-2 mb-1 md:mt-3 md:mb-2 font-bold text-22 leading-8">
        {title}
      </h3>
      <p className="text-14 font-medium leading-6 opacity-40 text-black h-[4.5rem]  overflow-hidden">
        {description}
      </p>
    </div>
  );
}
BlogCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
export default BlogCard;
