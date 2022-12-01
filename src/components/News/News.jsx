import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import SectionHeading from '../Heading/SectionHeading';
import './News.scss';

import NewsCard from './NewsCard';
const news = [
  {
    id: 0,
    source: 'LiveMint',
    time: 'Jun 4, 2022',
    title:
      'Loan provider Clix Capital digitizes collections business with Vymo for improved customer engagement',
    description:
      'Digital Transformation Leader, Deepak Keni, joins Vymo as Chief Customer Officer to drive Sales & Distribution Excellence in...',
    image: '/img/press/news-1.png',
  },
  {
    id: 1,
    source: 'LiveMint',
    time: 'Jun 4, 2022',
    title: 'Vymo raises Series C funding to empower remote sales teams',
    description:
      'Digital Transformation Leader, Deepak Keni, joins Vymo as Chief Customer Officer to drive Sales & Distribution Excellence in...',
    image: '/img/press/news-2.png',
  },
  {
    id: 3,
    source: 'LiveMint',
    time: 'Jun 4, 2022',
    title: 'Vymo Recognized in Tech: Sales Engagement Solutions Report',
    description:
      'Digital Transformation Leader, Deepak Keni, joins Vymo as Chief Customer Officer to drive Sales & Distribution Excellence in...',
    image: '/img/press/news-3.png',
  },
  {
    id: 4,
    source: 'LiveMint',
    time: 'Jun 4, 2022',
    title:
      'Loan provider Clix Capital digitizes collections business with Vymo for improved customer engagement',
    description:
      'Digital Transformation Leader, Deepak Keni, joins Vymo as Chief Customer Officer to drive Sales & Distribution Excellence in',
    image: '/img/press/news-1.png',
  },
];
function News({ years, data }) {
  const [activeYear, setActiveYear] = useState(years[0]);
  const filteredNews = useMemo(
    () =>
      (data || []).filter(
        (d) => new Date(d.time).getFullYear().toString() === activeYear,
      ),
    [activeYear],
  );
  return (
    <div className="news-main">
      <SectionHeading className="heading mb-3 md:mb-6">News</SectionHeading>
      <div className="flex flex-wrap">
        <div className="md:border-r md:border-r-borderStroke years">
          <ul className="flex md:block overflow-x-auto md:overflow-hidden border-b md:border-b-0 w-full md:w-auto">
            {years.map((y) => (
              <li
                key={y}
                className={`md:mb-3 ${(activeYear === y && 'active') || ''}`}>
                <button
                  type="button"
                  className="md:rounded-lg"
                  onClick={() => setActiveYear(y)}>
                  {y}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 mt-[40px] md:mt-0">
          {filteredNews.map((n) => (
            <NewsCard {...n} key={n.id} />
          ))}
        </div>
        <div className="w-full text-center mt-5 md:mt-6">
          <Button large>Load More</Button>
        </div>
      </div>
    </div>
  );
}

News.propTypes = {
  years: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      source: PropTypes.string,
      time: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};
News.defaultProps = {
  years: ['2022', '2021', '2020', '2019', '2018'],
  data: news,
};
export default News;
