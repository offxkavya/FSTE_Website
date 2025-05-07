import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, TrendingDown, FileText } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import ReturnRatesChart from '../components/charts/ReturnRatesChart';
import CategoryReturnChart from '../components/charts/CategoryReturnChart';

const ResearchPage: React.FC = () => {
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
            Research Findings
          </h1>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            A comprehensive analysis of return rates, environmental impact, and financial costs in Indian e-commerce.
          </p>
        </motion.div>

        {/* Return Rates Section */}
        <section className="mb-16">
          <SectionHeading 
            title="Return Rates in Indian E-Commerce"
            subtitle="Analysis of return patterns across different categories and payment methods."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-6">
                Return Rate Trends
              </h3>
              <div className="h-64 mb-6">
                <ReturnRatesChart />
              </div>
              <div className="space-y-4">
                <p className="text-neutral-700 dark:text-neutral-300">
                  E-commerce return rates in India have been steadily declining, from 17.4% in 2021 to 15.8% in 2022, and further to approximately 10% in 2023.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300">
                  This downward trend is largely attributed to stricter return policies implemented by major platforms and improved product information.
                </p>
              </div>
            </Card>

            <Card>
              <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-6">
                Category Analysis
              </h3>
              <div className="h-64 mb-6">
                <CategoryReturnChart />
              </div>
              <div className="space-y-4">
                <p className="text-neutral-700 dark:text-neutral-300">
                  Fashion and footwear consistently show the highest return rates (30-40%), while categories like groceries and pharmaceuticals have much lower rates (7-8%).
                </p>
                <p className="text-neutral-700 dark:text-neutral-300">
                  The high return rates in fashion are primarily due to size/fit issues, with approximately 40% of returns attributed to this factor.
                </p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card>
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mr-4">
                  <ShoppingCart size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-3">
                    COD vs Prepaid Orders
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    Payment method significantly impacts return behavior, with Cash on Delivery (COD) orders showing much higher return rates.
                  </p>
                  <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">COD Return Rate</p>
                      <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">24%</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Prepaid Return Rate</p>
                      <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">10%</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 mr-4">
                  <TrendingDown size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-3">
                    Yearly Decline in Returns
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    The e-commerce industry has seen a consistent decline in return rates over recent years.
                  </p>
                  <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-600 dark:text-neutral-400">2021:</span>
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">17.4%</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-600 dark:text-neutral-400">2022:</span>
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">15.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600 dark:text-neutral-400">2023:</span>
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">~10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Environmental Impact Section */}
        <section className="mb-16">
          <SectionHeading 
            title="Environmental Impact of Returns"
            subtitle="Assessment of the ecological footprint created by e-commerce returns."
          />

          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 inline-block rounded-full mb-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 22H22" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16.01L12.01 15.9989" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.07 16.941C2.93058 17.4482 3.01559 17.9852 3.30738 18.4249C3.59917 18.8646 4.06959 19.1614 4.6 19.24L12 21L19.4 19.24C19.9304 19.1614 20.4008 18.8646 20.6926 18.4249C20.9844 17.9852 21.0694 17.4482 20.93 16.941L19.07 8.941C18.9762 8.5787 18.7584 8.2597 18.4539 8.03681C18.1493 7.81392 17.7778 7.69954 17.4 7.71H6.6C6.22221 7.69954 5.85067 7.81392 5.54613 8.03681C5.24159 8.2597 5.02381 8.5787 4.93 8.941L3.07 16.941Z" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-2">CO₂ Emissions</h3>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">24M</p>
                  <p className="text-neutral-600 dark:text-neutral-400">Metric tons/year from returns</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-3">
                    Equivalent to emissions from 3 million cars annually
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 inline-block rounded-full mb-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 21H20" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8V4" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12L12 8L16 12" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 21V16.5C7 15.6716 7.67157 15 8.5 15H15.5C16.3284 15 17 15.6716 17 16.5V21" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-2">Packaging Waste</h3>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">4.8×</p>
                  <p className="text-neutral-600 dark:text-neutral-400">More waste than in-store shopping</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-3">
                    Each return requires additional packaging materials
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 inline-block rounded-full mb-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 21L12 17L17 21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 11H19" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 7.00005L8 3.00005H16L20 7.00005" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 7V17.5C5 18.0523 5.44772 18.5 6 18.5H18C18.5523 18.5 19 18.0523 19 17.5V7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-2">Landfill Waste</h3>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">25%</p>
                  <p className="text-neutral-600 dark:text-neutral-400">Of returns go directly to landfill</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-3">
                    9.5 billion pounds of returns sent to landfill (2022, U.S.)
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-800">
                <p className="text-neutral-700 dark:text-neutral-300">
                  The environmental impact of e-commerce returns is substantial and multifaceted. Returns not only result in increased carbon emissions from transportation but also generate significant packaging waste. The reverse logistics process often involves multiple shipping stages, potentially doubling or tripling a product's carbon footprint.
                </p>
                <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                  Furthermore, many returned items are never resold. Approximately 25% of returned merchandise ends up in landfills because the cost of processing, refurbishing, and restocking exceeds the potential recovery value. This leads to enormous waste of both materials and the resources used in manufacturing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Impact Section */}
        <section className="mb-16">
          <SectionHeading 
            title="Financial & Logistical Costs"
            subtitle="Analysis of the economic burden and operational challenges posed by returns."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-6">
                Revenue Impact
              </h3>
              <div className="space-y-6">
                <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg">
                  <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                    Projected revenue loss for Indian brands by 2025
                  </p>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">$20-30</span>
                    <span className="text-xl ml-1 text-neutral-900 dark:text-neutral-100">billion</span>
                  </div>
                </div>
                
                <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg">
                  <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                    Global value of returned goods (2023)
                  </p>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-secondary-600 dark:text-secondary-400">$743</span>
                    <span className="text-xl ml-1 text-neutral-900 dark:text-neutral-100">billion</span>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                    Representing 14.5% of total retail sales
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-6">
                Reverse Logistics Market
              </h3>
              <div className="space-y-4 mb-6">
                <p className="text-neutral-700 dark:text-neutral-300">
                  India's reverse logistics sector has grown rapidly to support the increasing volume of returns, creating both challenges and opportunities.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300">
                  The market is projected to grow at a CAGR of approximately 6% through 2033, driven by increasing e-commerce adoption and evolving return policies.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Current Value (2024)</p>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">$33.2B</p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Projected (2033)</p>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">$57.5B</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-8">
            <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-6">
              Return Processing Costs & Challenges
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mr-4">
                  <FileText size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-2">
                    Processing Components
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                    Handling a return involves multiple cost centers and operational steps:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-400">
                    <li>Return shipping and transportation</li>
                    <li>Warehouse receipt and processing</li>
                    <li>Quality inspection and condition assessment</li>
                    <li>Cleaning, repackaging, and restocking</li>
                    <li>Value recovery (markdown, liquidation, or disposal)</li>
                    <li>Customer service and refund processing</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 15L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 9H9.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 15H14.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-2">
                    Return Fraud
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    A significant portion of returns involve fraudulent behavior, adding to costs and complexity:
                  </p>
                  <div className="mt-3 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-neutral-700 dark:text-neutral-300">Fraudulent returns globally:</span>
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">13.7%</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-neutral-700 dark:text-neutral-300">Additional cost from fraud:</span>
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">$101B</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                    Common fraud types include "wardrobing" (using and returning), false damage claims, and receipt fraud.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Consumer Behavior Section */}
        <section>
          <SectionHeading 
            title="Consumer Behavior Driving Returns"
            subtitle="Understanding the psychological and practical factors that lead to high return rates."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="text-center mb-6">
                <div className="p-4 bg-primary-50 dark:bg-primary-900/20 inline-block rounded-full mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 13C18.985 13 21 10.985 21 8.5C21 6.015 18.985 4 16.5 4C14.015 4 12 6.015 12 8.5" stroke="#2AA371" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 20L11 17.5L8.5 15" stroke="#2AA371" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 8.5H3" stroke="#2AA371" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 8.5V19.5C3 20.6046 3.89543 21.5 5 21.5H14" stroke="#2AA371" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">Cash on Delivery Preference</h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                COD remains a popular payment method in India, but significantly increases return probability. Customers have lower purchase commitment when choosing COD, leading to:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-400 list-disc pl-5">
                <li>Higher return-to-origin (RTO) rates</li>
                <li>24% return rate vs. 10% for prepaid orders</li>
                <li>Less consideration before purchase</li>
              </ul>
            </Card>

            <Card>
              <div className="text-center mb-6">
                <div className="p-4 bg-secondary-50 dark:bg-secondary-900/20 inline-block rounded-full mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9H21" stroke="#1EAEF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 21V9" stroke="#1EAEF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.5 13.5L12 21" stroke="#1EAEF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1EAEF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">Bracket Buying</h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                Free and easy returns encourage "bracket buying" behavior, where customers:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-400 list-disc pl-5">
                <li>Order multiple sizes, colors, or styles</li>
                <li>Try items at home like a fitting room</li>
                <li>Return 60-80% of ordered items</li>
                <li>92% cite free returns as a purchase motivator</li>
              </ul>
            </Card>

            <Card>
              <div className="text-center mb-6">
                <div className="p-4 bg-accent-50 dark:bg-accent-900/20 inline-block rounded-full mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#FF8317" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 13V12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16H11" stroke="#FF8317" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 16V19" stroke="#FF8317" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">Fit & Quality Issues</h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                Product uncertainty drives many returns, particularly in fashion:
              </p>
              <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-400 list-disc pl-5">
                <li>40% of fashion returns due to size/fit problems</li>
                <li>Products appearing different than in images</li>
                <li>Difficulty assessing fabric, quality, or dimensions</li>
                <li>Lack of standardized sizing across brands</li>
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResearchPage;