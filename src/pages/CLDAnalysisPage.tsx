import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import CLDViewer from '../components/cld/CLDViewer';
import ss from "../data/ss.png"
import { ArrowRight, HelpCircle, Circle, TrendingUp, TrendingDown } from 'lucide-react';

const CLDAnalysisPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Causal Loop Diagram Analysis
          </h1>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            Understanding the complex system dynamics and feedback loops driving e-commerce return rates.
          </p>
        </motion.div>

        {/* CLD Introduction Section */}
        <section className="mb-16">
          <SectionHeading 
            title="System Dynamics Approach"
            subtitle="Using causal loop diagrams to map the interconnected factors affecting returns."
          />

          <Card>
            <div className="space-y-6">
              <p className="text-neutral-700 dark:text-neutral-300">
                A Causal Loop Diagram (CLD) is a systems thinking tool that helps visualize how different variables in a system influence each other. In our analysis of e-commerce returns, the CLD reveals the complex feedback loops that drive return behavior and its environmental and economic impacts.
              </p>
              
              <div className="flex items-start p-4 bg-primary-50 dark:bg-primary-900/10 rounded-lg">
                <HelpCircle className="text-primary-600 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-1">How to Read the CLD</h4>
                  <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 text-sm">
                    <li className="flex items-center">
                      <Circle className="text-neutral-500 mr-2" size={8} />
                      <span>Each node represents a factor in the system (e.g., return rate, product quality)</span>
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="text-primary-600 dark:text-primary-400 mr-2" size={16} />
                      <span>Arrows with (+) indicate positive relationships: if one factor increases, the other increases</span>
                    </li>
                    <li className="flex items-center">
                      <TrendingDown className="text-red-500 dark:text-red-400 mr-2" size={16} />
                      <span>Arrows with (-) indicate negative relationships: if one factor increases, the other decreases</span>
                    </li>
                    <li className="flex items-center">
                      <Circle className="text-neutral-500 mr-2" size={8} />
                      <span>Closed loops indicate feedback mechanisms that reinforce or balance behaviors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Interactive CLD Section */}
        <section className="mb-16">
          <SectionHeading 
            title="Interactive CLD Visualization"
            subtitle="Explore the relationships between different factors in the e-commerce returns ecosystem."
          />

          <Card className="p-0 overflow-hidden">
            <div className="p-6 border-b border-neutral-100 dark:border-neutral-800">
              <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100">
                E-commerce Returns Causal Loop Diagram
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                Click on any node to see details. Drag to reposition nodes and explore the diagram.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-900">
              <img src={ss} alt="cld"/>
            </div>
          </Card>
        </section>

        {/* Key Feedback Loops Section */}
        <section className="mb-16">
          <SectionHeading 
            title="Key Feedback Loops"
            subtitle="Analysis of the major reinforcing and balancing loops in the e-commerce return system."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M19.25 12C19.25 15.866 16.116 19 12.25 19L12.25 12L12.25 5C16.116 5 19.25 8.13401 19.25 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-3">
                    [R1] Product Information Reinforcing Loop
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    This reinforcing loop shows how investment in better product information leads to higher profits, enabling further investment:
                  </p>
                  <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                    <li>↑ Investment in product info → ↑ Product representation quality</li>
                    <li>↑ Product representation → ↑ Trusted product tags</li>
                    <li>↑ Trusted product tags → ↑ Trust</li>
                    <li>↑ Trust → ↑ Profit</li>
                    <li>↑ Profit → ↑ Investment in product info</li>
                  </ul>
                  <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">
                      Leverage Point:
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Investing in better product descriptions, accurate images, 3D views, and size guides creates a virtuous cycle by reducing returns and increasing customer satisfaction and trust.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 mr-4 flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-3">
                    [B1] Quality-Returns Balancing Loop
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    This balancing loop demonstrates how operational costs from returns can ultimately lead to quality improvements:
                  </p>
                  <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                    <li>↑ Return rate → ↑ E-commerce waste</li>
                    <li>↑ E-commerce waste → ↑ Operational cost</li>
                    <li>↑ Operational cost → ↑ Product improvement</li>
                    <li>↑ Product improvement → ↑ Quality</li>
                    <li>↑ Quality → ↓ Return rate</li>
                  </ul>
                  <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">
                      Leverage Point:
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Accelerating this natural feedback loop by systematically tracking return reasons and rapidly implementing quality improvements can significantly reduce return rates over time.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card>
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 mr-4 flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-3">
                    [B2] Trust-Reviews Balancing Loop
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    This loop illustrates how trust in a brand influences customer reviews and sales:
                  </p>
                  <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                    <li>↑ Trust → ↑ Good reviews</li>
                    <li>↑ Good reviews → ↑ Sales</li>
                    <li>↑ Sales → ↑ Brand visibility</li>
                    <li>↑ Brand visibility → ↓ Trust (if brand can't maintain quality at scale)</li>
                  </ul>
                  <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">
                      Leverage Point:
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Maintaining product quality and customer satisfaction at scale is crucial as brand visibility increases. Failing to do so can lead to a collapse in trust and increased returns.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 mr-4 flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11.01L12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.92993 19.07L19.0699 4.93M19.0699 4.93H8.99993M19.0699 4.93V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-3">
                    [R2] Impulsive Purchase-Return Cycle
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    This reinforcing loop shows how return policies influence shopping behavior:
                  </p>
                  <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                    <li>↑ Lax return policy → ↑ Impulsive purchases</li>
                    <li>↑ Impulsive purchases → ↑ Return rate</li>
                    <li>↑ Return rate → ↑ Strict return policy (platform response)</li>
                    <li>↑ Strict return policy → ↓ Impulsive purchases</li>
                  </ul>
                  <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">
                      Leverage Point:
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Designing return policies that discourage impulsive buying while maintaining customer trust can break this cycle. Examples include tiered returns based on purchase history or return reason.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* System Archetypes Section */}
        <section>
          <SectionHeading 
            title="System Archetypes & Intervention Strategies"
            subtitle="Identifying common system patterns and effective intervention points."
          />

          <Card>
            <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-6">
              "Fixes That Fail" Archetype
            </h3>
            
            <div className="space-y-6">
              <p className="text-neutral-700 dark:text-neutral-300">
                The e-commerce returns system exhibits a classic "Fixes That Fail" archetype, where quick solutions to reduce returns (like stricter policies) may provide temporary relief but eventually create unintended consequences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg">
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-3">
                    Short-Term Fix
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Platforms implement stricter return policies (fees, shorter windows) to reduce return rates and operational costs.
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full mr-3">
                      <ArrowRight className="text-green-600 dark:text-green-400" size={16} />
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      Short-term reduction in returns
                    </p>
                  </div>
                </div>
                
                <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg">
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-3">
                    Unintended Consequences
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Customer trust declines, reducing future purchases or shifting buyers to competitors with more lenient policies.
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full mr-3">
                      <ArrowRight className="text-red-600 dark:text-red-400" size={16} />
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      Long-term decline in customer loyalty
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-neutral-100 dark:border-neutral-800 pt-6">
                <h4 className="font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-3">
                  Effective Intervention Strategies
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-3 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.5839C12.7674 22.1952 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2462 3.61096 17.4371C2.43727 15.628 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011" stroke="#2AA371" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="#2AA371" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800 dark:text-neutral-200">
                        Address root causes rather than symptoms
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                        Instead of just tightening return policies, invest in improving product information quality and accuracy to prevent mismatched expectations.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-3 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.5839C12.7674 22.1952 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2462 3.61096 17.4371C2.43727 15.628 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011" stroke="#2AA371" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="#2AA371" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800 dark:text-neutral-200">
                        Design balanced policies
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                        Create return policies that balance deterring frivolous returns while maintaining customer trust. Example: tiered approach based on customer history and purchase category.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-3 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.5839C12.7674 22.1952 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2462 3.61096 17.4371C2.43727 15.628 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011" stroke="#2AA371" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="#2AA371" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800 dark:text-neutral-200">
                        Strengthen feedback loops for quality improvement
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                        Systematically collect and analyze return data to identify patterns, then rapidly implement product improvements based on those insights.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CLDAnalysisPage;