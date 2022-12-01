import React from 'react';
import Content from '../../Content/Content';

const challenges = [
  {
    id: 0,
    heading:
      'Tracking and improving productivity of Relationship Managers (RMs)',
    content:
      'The sales cycles are long, B2B in nature, and involve multiple stakeholders from both, the client’s (School’s) and solution provider’s (Varthana’s) points. There are pre disbursement activities (Ex: KYC – Know Your Customer) and post disbursement activities (Ex: verifying end use of loan) in sales closure. Finally, there are collection activities and identifying opportunities for cross/up sell of products.',
  },
  {
    id: 1,
    heading:
      'Managing lead pipeline and improving conversion efficiency of RMs',
    content:
      'Leads were assigned on a need basis. Further, there was no systematic process to track engagement, lead stages, and closure. As a result, there was also no method to track biases or see patterns in the lifetime of a lead, which led to suboptimal conversions and leakage.',
  },
  {
    id: 2,
    heading: 'Complex multi-tiered processes with multiple stages and handoffs',
    content:
      'Loan disbursement involves numerous complicated compliance and regulatory processes that have to be carried out with handshake between multiple diverse stakeholders, such as Sales and Finance teams. It was difficult to coordinate throughout the process lifecycle.',
  },
  {
    id: 3,
    heading: 'Limited visibility on metrics that matter to the Management',
    content:
      'Daily Sales Reports (DSRs) were communicated through Excel Sheets and Emails. The data itself wasn’t validated and open to discrepancies. Further, the lack of consolidated data limited the Management’s ability to analyse the business and resource efficiently.',
  },
];

function ChallengesSection() {
  return (
    <section className="relative pb-6 md:pb-7">
      <div className="container">
        <div className="small-container">
          <div className="text-32 leading-[42px] tracking-[-1px] font-bold mb-1 md:mb-[40px] font-objectivity">
            Challenges
          </div>
          {challenges.map((c) => (
            <Content key={c.id} {...c} />
          ))}
          <h2 className="text-32 leading-[42px] tracking-[-1px] font-bold md:pt-2 md:mb-[40px] mb-1">
            Solution
          </h2>
          <div className="mb-[40px] md:mb-6">
            <h3 className="text-18 md:text-22 leading-7 md:leading-8 tracking-[-1px] font-medium text-whale">
              Automated activity capture using geo-fencing/locational
              intelligence and native integrations to phone dialler.
            </h3>
            <ul className="text-14 leading-[21px] md:text-16 md:leading-7 font-medium opacity-60 text-black mt-1 list-disc pl-2 mb-4 md:mb-6">
              <li>
                Automated call detection, including workflows for various
                scenarios: missed call, not reachable, call completed.
              </li>
              <li>
                Automated meeting detection, and geo coverage analysis of
                Relationship Managers (RMs).
              </li>
              <li>
                Easy setup of follow-up tasks based on call and meeting
                scenarios.
              </li>
            </ul>
            <h2 className="text-32 leading-[42px] tracking-[-1px] font-bold pt-1 md:pt-2">
              Results
            </h2>
            <div className="text-14 leading-[21px] md:text-16 md:leading-7 font-medium opacity-60 text-black pt-1 md:pb-6">
              All sensitive client data is hosted securely on the AWS India
              cloud for providing sturdy performance and stability. This
              facilitates effective serving of reports and reduces the response
              time for large reports to less than 2 seconds. iSAC integration
              helps Vymo automate user onboarding and maintenance tasks.
            </div>
          </div>
        </div>
        <div className="p-4 md:p-[56px] quote-container">
          <img
            className="max-w-[122px] md:max-w-max"
            src="/img/logo/gartner.png"
            alt="Gartner"
            width="136"
            height="31"
          />
          <div className="pt-3 pb-2 md:pt-6 md:pb-3 text-18 leading-7 md:text-22 md:leading-[38px] tracking-[-1px] font-objectivity font-medium">
            “We selected Vymo because of its unique application of automation
            and AI technology that allows for seamless data capture and
            contextual recommendations.”
          </div>
          <div className="pt-2 text-16 leading-7 md:text-18 md:leading-7 font-medium text-black opacity-60">
            Satya Nadela, CEO Microsoft
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengesSection;
