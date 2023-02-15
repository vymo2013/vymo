import React from 'react';
import Layout from '../components/Layout';
import SalesEngagement from '../components/sections/SalesEngagementSection/SalesEngagementSection';
import ChallengesSection from '../components/pages/WhyVymo/ChallengesSection';
// import DownloadSalesInsights from '../components/pages/WhyVymo/DownloadSalesInsights';
import HeroSection from '../components/pages/WhyVymo/HeroSection';
import IntegrationSection from '../components/pages/WhyVymo/IntegrationSection';
import TransformingSection from '../components/pages/WhyVymo/TransformingSection/TransformingSection';
import SEO from '../components/SEO';

function WhyVymoPage() {
  return (
    <Layout>
      <SEO title="Why Vymo" />
      <HeroSection />
      <TransformingSection />
      <SalesEngagement />
      <IntegrationSection />
      <ChallengesSection />
      {/*<DownloadSalesInsights />*/}
    </Layout>
  );
}

export default WhyVymoPage;
