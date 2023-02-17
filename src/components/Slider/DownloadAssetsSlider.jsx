import React from 'react';
import DownloadSlider from './DownloadSlider';
const brandAssets = [
  {
    id: 1,
    img: '/img/press/vymo-card.png',
    alt: 'Vymo',
    title: 'Brand Assets',
    description:
      'Digital Transformation Leader, Deepak Keni, joins Vymo as Chief Customer Officer to drive Sales & Distribution Excellence in...',

    downloadText: 'Download Assets',
    downloadLink: '#!',
    imgClassName: 'w-full',
  },
  {
    id: 2,
    img: '/img/press/leadership-card.png',
    alt: 'Leadership',
    title: 'Leadership Photos',
    description:
      'Digital Transformation Leader, Deepak Keni, joins Vymo as Chief Customer Officer to drive Sales & Distribution Excellence in...',
    downloadText: 'Download Assets',
    downloadLink: '#!',
    imgClassName: 'w-full',
  },
  {
    id: 3,
    img: '/img/press/office-card.png',
    alt: 'People',
    title: 'Our people and offices',
    description:
      'Digital Transformation Leader, Deepak Keni, joins Vymo as Chief Customer Officer to drive Sales & Distribution Excellence in...',
    downloadText: 'Download Assets',
    downloadLink: '#!',
    imgClassName: 'w-full',
  },
];
function DownloadAssetsSlider() {
  return <DownloadSlider data={brandAssets} imageHeight="" />;
}

export default DownloadAssetsSlider;
