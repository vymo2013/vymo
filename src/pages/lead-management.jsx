import React from 'react';
import Layout from '../components/Layout';
import AllocationSection from '../components/pages/LeadManagement/AllocationSection';
import HeroSection from '../components/pages/LeadManagement/HeroSection';
import LeadChallenges from '../components/pages/LeadManagement/LeadChallenges';
import LittleMoreSection from '../components/pages/LeadManagement/LittleMoreSection';
import HowWeCanHelp from '../components/pages/LeadManagement/HowWeCanHelp';
import VymoMagicSection from '../components/pages/LeadManagement/VymoMagicSection';
import ContactSection from '../components/sections/ContactSection/ContactSection';
import SalesEngagement from '../components/sections/SalesEngagementSection/SalesEngagementSection';
import GetStartedSection from '../components/sections/GetStartedSection/GetStartedSection';
import DeployedSection from '../components/sections/DeployedSection';
import WatchInAction from '../components/pages/LeadManagement/WatchInAction';
import TyppicalChallenges from '../components/pages/LeadManagement/TyppicalChallenges';
import SEO from '../components/SEO';

function LeadManagementPage() {
  return (
    <Layout mainClassName="main-lead-management">
      <SEO title="Lead Management Software" description="Lead Management Software with an Intelligent Sales Assistant Ensure effective lead management and seamless customer onboarding Request a demo Why is lead management software the #1 priority for financial organizations? Lead management software has a significant impact not just in improving business performance, but also the seller experience. If lead management isn’t done right," />
      <HeroSection />
      <div className="container home">
        <div className="row overflow-hidden col-xs-12 logo-shw pb-[48px] md:pb-[100px]">
          <DeployedSection />
        </div>
      </div>
      <TyppicalChallenges/>
      <LeadChallenges />
      <VymoMagicSection />
      <WatchInAction />
      <HowWeCanHelp />
      <AllocationSection />
      <LittleMoreSection />
      <ContactSection />
      {/*<SalesEngagement title="Vymo’s accuracy of matching leads to the best fit rep has been >90%, based on multiple customer deployments." />*/}
      <SalesEngagement />
      <GetStartedSection />
    </Layout>
  );
}

export default LeadManagementPage;
