import React from 'react';
import Layout from '../components/Layout';
import AllocationSection from '../components/pages/LeadManagement/AllocationSection';
import HeroSection from '../components/pages/LeadManagement/HeroSection';
import LeadChallenges from '../components/pages/LeadManagement/LeadChallenges';
// import LittleMoreSection from '../components/pages/LeadManagement/LittleMoreSection';
import HowWeCanHelp from '../components/pages/LeadManagement/HowWeCanHelp';
// import VymoMagicSection from '../components/pages/LeadManagement/VymoMagicSection';
import ContactSection from '../components/sections/ContactSection/ContactSection';
import SalesEngagement from '../components/sections/SalesEngagementSection/SalesEngagementSection';
import GetStartedSection from '../components/sections/GetStartedSection/GetStartedSection';
import DeployedSection from '../components/sections/DeployedSection';
import WatchInAction from '../components/pages/LeadManagement/WatchInAction';
import SEO from '../components/SEO';

function LeadManagementPage() {
  return (
    <Layout mainClassName="main-lead-management">
      <SEO title="Lead Management" />
      <HeroSection />
      <DeployedSection />
      <LeadChallenges />
      {/* <VymoMagicSection /> */}
      <HowWeCanHelp />

      <WatchInAction />
      <AllocationSection />
      {/* <LittleMoreSection /> */}
      <ContactSection />
      <SalesEngagement title="Vymo’s accuracy of matching leads to the best fit rep has been >90%, based on multiple customer deployments." />
      <GetStartedSection />
    </Layout>
  );
}

export default LeadManagementPage;
