import * as React from 'react';

import Layout from '../components/Layout';
import BenifitsSection from '../components/pages/Home/BenifitsSection/BenifitsSection';
import ContactSection from '../components/sections/ContactSection/ContactSection';
import GetStartedSection from '../components/sections/GetStartedSection/GetStartedSection';
import HeroSection from '../components/pages/Home/HeroSection/HeroSection';
import PersonalAssistantSection from '../components/pages/Home/PersonalAssistantSection/PersonalAssistantSection';
import SalesDetailsSection from '../components/pages/Home/SalesDetailsSection/SalesDetailsSection';
import SalesEngagementSection from '../components/sections/SalesEngagementSection/SalesEngagementSection';
import VymoHelpSection from '../components/pages/Home/VymoHelpSection/VymoHelpSection';
import SEO from '../components/SEO';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <BenifitsSection />
      <PersonalAssistantSection />
      <VymoHelpSection />
      <ContactSection />
      <SalesEngagementSection />
      <SalesDetailsSection />
      <GetStartedSection />
    </Layout>
  );
}

export default IndexPage;
