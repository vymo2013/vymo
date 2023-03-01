import React from 'react';
import Layout from '../components/Layout';
import SalesEngagement from '../components/sections/SalesEngagementSection/SalesEngagementSection';
import ChallengesSection from '../components/pages/WhyVymo/ChallengesSection';
// import DownloadSalesInsights from '../components/pages/WhyVymo/DownloadSalesInsights';
import HeroSection from '../components/pages/WhyVymo/HeroSection';
// import IntegrationSection from '../components/pages/WhyVymo/IntegrationSection';
import TransformingSection from '../components/pages/WhyVymo/TransformingSection/TransformingSection';
import ModalVideo from '../components/pages/WhyVymo/VideoModal';
import GetStartedSection from '../components/sections/GetStartedSection/GetStartedSection';
import SEO from '../components/SEO';

function WhyVymoPage() {
  return (
    <Layout>
      <SEO title="Why Vymo" description="Vymo is the fastest growing software market in the World (Gartner). Organizations are spending millions of dollars and many man-months in deployments each year."/>
      <HeroSection />
      <TransformingSection />
      <ModalVideo />
      <SalesEngagement />
      {/* <IntegrationSection /> */}
      <ChallengesSection />
      <GetStartedSection />
      {/*<DownloadSalesInsights />*/}
    </Layout>
  );
}

export default WhyVymoPage;
