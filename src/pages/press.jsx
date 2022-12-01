import React from 'react';
import Layout from '../components/Layout';
import DownloadAssetsSection from '../components/pages/Press/DownloadAssetsSection';
import HeroSection from '../components/pages/Press/HeroSection';
import IndustryPerspectiveSection from '../components/pages/Press/IndustryPerspectiveSection';
import NewsSection from '../components/pages/Press/NewsSection';
import VymoInActionSection from '../components/sections/VymoInActionSection';
import SEO from '../components/SEO';

function PressPage() {
  return (
    <Layout mainClassName="main-press" headerProps={{ dark: false }}>
      <SEO title="Press" />
      <HeroSection />
      <NewsSection />
      <IndustryPerspectiveSection />
      <DownloadAssetsSection />
      <VymoInActionSection />
    </Layout>
  );
}

export default PressPage;
