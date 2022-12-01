import React from 'react';
import DownloadSlider from './DownloadSlider';

const reports = [
  {
    id: 1,
    img: '/img/logo/gartner.png',
    alt: 'Gartner',
    title:
      'Vymo is a Representative Vendor in Gartner’s Sales Engagement Market Guide',
    description:
      'Vymo should be of interest to application leaders supporting CRM Technologies and sales organizations (such as field sales and telesales) that need to make a step change in sales productivity',
    downloadText: 'Download Report',
    downloadLink: '#!',
    imgClassName: '',
  },
  {
    id: 2,
    img: '/img/logo/forrester.png',
    alt: 'Forrester',
    title: 'Vymo is a Representative Vendor in Forrester Now Tech',
    description:
      'Sales engagement platforms represent a comprehensive set of capabilities…Sales and revenue development teams select these solutions for the integrated, robust feature set',
    downloadText: 'Download Report',
    downloadLink: '#!',
    imgClassName: '',
  },
  {
    id: 3,
    img: '/img/logo/cb-insights.png',
    alt: 'CB Insights',
    title: 'CB Insights recognizes Vymo among AI Startups Enhancing Sales',
    description:
      'These startups use AI to enhance sales forecasting accuracy, make intelligent recommendations to improve team performance, and understand how goals are achievable across various sales scenarios',
    downloadText: 'Download Report',
    downloadLink: '#!',
    imgClassName: '',
  },
];
function ReportSlider() {
  return <DownloadSlider data={reports} />;
}

export default ReportSlider;
