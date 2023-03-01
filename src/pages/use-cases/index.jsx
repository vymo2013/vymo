import * as React from 'react';

import Layout from '../../components/Layout';
import BrokerSection from '../../components/pages/UseCases/BrokerSection';
import HeroSection from '../../components/pages/UseCases/HeroSection';
import LogoSection from '../../components/pages/UseCases/LogoSection';
import WholeSalerSection from '../../components/pages/UseCases/WholeSalerSection';
import LeadingMatricSection from '../../components/pages/UseCases/LeadingMatricSection';
import ContactSection from '../../components/sections/ContactSection/ContactSection';
import GetStartedSection from '../../components/sections/GetStartedSection/GetStartedSection';
import SalesEngagement from '../../components/sections/SalesEngagementSection/SalesEngagementSection';
import SEO from '../../components/SEO';

function UseCasesPage() {
  return (
    <Layout mainClassName="main-use-cases">
      <SEO title="Use Cases" />
      <HeroSection />
      <section className="md:pt-[80px]">
          <LogoSection />
      </section>
      <BrokerSection />
      <WholeSalerSection />
      <LeadingMatricSection />
      <SalesEngagement />
      <ContactSection />
      <GetStartedSection />
    </Layout>
  );
}

export default UseCasesPage;
