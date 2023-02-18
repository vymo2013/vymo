import * as React from 'react';

import Layout from '../components/Layout';
import BenifitsSection from '../components/pages/Home/BenifitsSection/BenifitsSection';
import ContactSection from '../components/sections/ContactSection/ContactSection';
import GetStartedSection from '../components/sections/GetStartedSection/GetStartedSection';
import HeroSection from '../components/pages/Home/HeroSection/HeroSection';
import SalesDetailsSection from '../components/pages/Home/SalesDetailsSection/SalesDetailsSection';
import TestimonialSection from '../components/pages/Home/TestimonialSection/TestimonialSection';
// import PersonalAssistantSection from '../components/pages/Home/PersonalAssistantSection/PersonalAssistantSection';
import SalesEngagementSection from '../components/sections/SalesEngagementSection/SalesEngagementSection';
// import VymoHelpSection from '../components/pages/Home/VymoHelpSection/VymoHelpSection';
import SEO from '../components/SEO';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Sales Engagement Platform for Financial Institutions" />
      <HeroSection />
      <BenifitsSection />
      <SalesDetailsSection />
      <ContactSection />
      <TestimonialSection />
      {/*<PersonalAssistantSection />*/}
      {/*<VymoHelpSection />*/}
      <SalesEngagementSection />
      <GetStartedSection />
    </Layout>
  );
}

export default IndexPage;
