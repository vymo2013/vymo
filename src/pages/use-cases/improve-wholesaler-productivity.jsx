import * as React from 'react';

import Layout from '../../components/Layout';
// import BrokerSection from '../../components/pages/UseCases/BrokerSection';
import HeroSection from '../../components/pages/UseCases/Wholesalers/HeroSection';
import LogoSection from '../../components/pages/UseCases/LogoSection';
import LeadingMatricSection from '../../components/pages/UseCases/Wholesalers/LeadingMatricSection';
import ContactSection from '../../components/sections/ContactSection/ContactSection';
import GetStartedSection from '../../components/sections/GetStartedSection/GetStartedSection';
import SalesEngagement from '../../components/sections/SalesEngagementSection/SalesEngagementSection';
import WatchInAction from '../../components/pages/UseCases/Wholesalers/WatchInAction';
import HowWeCanHelp from '../../components/pages/UseCases/Wholesalers/HowWeCanHelp';
// import ModalVideo from '../../components/pages/UseCases/Wholesalers/VideoModal';
import SEO from '../../components/SEO';

function WholesalerPage() {
  return (
    <Layout mainClassName="main-use-cases">
      <SEO title="Vymo for your Wholesaler Distribution Network" description="Learn how Vymo can help you maximize your sales efficiency through your wholesaler distribution. "/>
      <HeroSection />
      {/* <ModalVideo /> */}
      <section className="md:pt-[80px]">
          <LogoSection />
      </section>
      <WatchInAction />
      {/* <BrokerSection /> */}
      <HowWeCanHelp />
      <LeadingMatricSection />
      <SalesEngagement />
      <ContactSection />
      <GetStartedSection />
    </Layout>
  );
}

export default WholesalerPage;
