import React from 'react';
import Layout from '../components/Layout';
// import SalesDetailsSection from '../components/pages/Home/SalesDetailsSection/SalesDetailsSection';
import CoreModulesSection from '../components/pages/ProductOverview/CoreModulesSection';
import EmbarkSection from '../components/pages/ProductOverview/EmbarkSection/EmbarkSection';
import HeroSection from '../components/pages/ProductOverview/HeroSection';
import HowVymoWorksSection from '../components/pages/ProductOverview/HowVymoWorksSection';
// import JourneySection from '../components/pages/ProductOverview/JourneySection/JourneySection';
import IntegrationSection from '../components/pages/WhyVymo/IntegrationSection';
import ContactSection from '../components/sections/ContactSection/ContactSection';
import DeployedSection from '../components/sections/DeployedSection';
import GetStartedSection from '../components/sections/GetStartedSection/GetStartedSection';
import SalesEngagement from '../components/sections/SalesEngagementSection/SalesEngagementSection';
import SEO from '../components/SEO';
function LeadManagementPage() {
  return (
    <Layout mainClassName="product-overvew">
      <SEO title="Product Overview" />
      <HeroSection />
      <section className="pb-[48px] md:pb-[80px]">
        <DeployedSection />
      </section>
      <HowVymoWorksSection />
      {/*<JourneySection />*/}
      <EmbarkSection />
      <CoreModulesSection />
      <IntegrationSection />
      {/*<SalesDetailsSection />*/}
      <SalesEngagement />
      <ContactSection />
      <GetStartedSection />
    </Layout>
  );
}

export default LeadManagementPage;
