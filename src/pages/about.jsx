import React from 'react';
import Layout from '../components/Layout';
import CRMSection from '../components/pages/About/CRMSection';
import GrowingSection from '../components/pages/About/GrowingSection';
import HeroSection from '../components/pages/About/HeroSection';
import InvestorSection from '../components/pages/About/InvestorSection';
import JoinVymoSection from '../components/pages/About/JoinVymoSection';
import LeaderShipSection from '../components/pages/About/LeaderShipSection/LeaderShipSection';
import OfficeLocationSection from '../components/pages/About/OfficeLocationSection';
import ValuesSection from '../components/pages/About/ValueSection/ValuesSection';
import SEO from '../components/SEO';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About Us" />
      <HeroSection />
      <CRMSection />
      <GrowingSection />
      <ValuesSection />
      <LeaderShipSection />
      <OfficeLocationSection />
      <InvestorSection />
      <JoinVymoSection />
    </Layout>
  );
}

export default AboutPage;
