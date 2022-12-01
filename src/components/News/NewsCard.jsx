import React from 'react';
import PropTypes from 'prop-types';

function NewsCard({ id, title, description, source, time, image }) {
  return (
    <article className="mb-[27px] md:mb-4 last:mb-0 p-1.5 pb-0 md:p-0 border md:border-none rounded-2xl md:rounded-none">
      <a
        href={`/!#${id}`}
        className="flex flex-col-reverse md:flex-row flex-wrap justify-between pb-[40px] md:border-b-2 md:border-borderStroke">
        <div className="w-full md:w-[70%]">
          <h2 className="mb-2 text-purple text-14 leading-[21px] mt-3 md:mt-0">
            <span className="border-r border-r-purple pr-1 mr-1">{source}</span>
            {time}
          </h2>
          <h3 className="mb-[18px] font-bold text-22 leading-8">{title}</h3>
          <p className="text-14 font-medium leading-[21px] opacity-60 text-black m-0">
            {description}
          </p>
        </div>
        <div className="flex-1 overflow-hidden max-w-full md:max-w-[238px] rounded-lg relative">
          <img
            src={image}
            alt=""
            width="238"
            height="186"
            className="object-cover w-full h-full"
          />
        </div>
      </a>
    </article>
  );
}
NewsCard.propTypes = {
  id: PropTypes.number,
  source: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
export default NewsCard;
