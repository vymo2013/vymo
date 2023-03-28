import * as React from 'react';

import Layout from '../components/Layout';
// import BenifitsSection from '../components/pages/Home/BenifitsSection/BenifitsSection';
// import ContactSection from '../components/sections/ContactSection/ContactSection';
// import GetStartedSection from '../components/sections/GetStartedSection/GetStartedSection';
import HeroSection from '../components/pages/Home/HeroSection/HeroSection';
import BannerSection from '../components/pages/Home/BannerSection';
import DriveSalesSection from '../components/pages/Home/DriveSalesSection';
import VymoSolvesSection from '../components/pages/Home/VymoSolvesSection';
// import SalesDetailsSection from '../components/pages/Home/SalesDetailsSection/SalesDetailsSection';
import TestimonialSection from '../components/pages/Home/TestimonialSection/TestimonialSection';
// import PersonalAssistantSection from '../components/pages/Home/PersonalAssistantSection/PersonalAssistantSection';
import SalesEngagementSection from '../components/sections/SalesEngagementSection/SalesEngagementSection';
// import VymoHelpSection from '../components/pages/Home/VymoHelpSection/VymoHelpSection';
import DeployedSection from '../components/sections/DeployedSection';
import SEO from '../components/SEO';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Sales Engagement Platform for Financial Institutions" description="Sales Engagement Platform of choice for leading Financial Institutions. Used by 300k+ salespeople across 65+ enterprises such as Berkshire Hathaway, Sunlife, BNP Paribas, AXA, and AIA."/>
      <HeroSection />
      <BannerSection />
      <DriveSalesSection />
      <VymoSolvesSection />
      {/* <BenifitsSection />
      <SalesDetailsSection />
      <ContactSection /> */}
      <TestimonialSection />
      <SalesEngagementSection />
      {/*<PersonalAssistantSection />*/}
      {/*<VymoHelpSection />*/}
      {/* <GetStartedSection /> */}
    </Layout>
  );
}

export default IndexPage;
