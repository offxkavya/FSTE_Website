import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Leaf, PiggyBank, LineChart } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import ReturnRatesChart from '../components/charts/ReturnRatesChart';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-neutral-100 leading-tight mb-6">
                Solving the <span className="text-primary-600 dark:text-primary-400">E-commerce</span> Return Crisis
              </h1>
              <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-xl mx-auto md:mx-0">
                Analyzing the environmental, economic, and social impact of e-commerce returns in India and developing sustainable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  to="/research"
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                >
                  Explore Research
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  to="/cld-analysis"
                  className="px-6 py-3 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-medium rounded-lg transition-colors flex items-center justify-center"
                >
                  View CLD Analysis
                  <LineChart className="ml-2" size={18} />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl bg-white dark:bg-neutral-900">
                <div className="p-6">
                  <h3 className="font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-4">
                    E-commerce Return Rates in India
                  </h3>
                  <div className="h-64">
                    <ReturnRatesChart />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-28">
                    <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">COD Returns</p>
                      <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">24%</p>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Prepaid Returns</p>
                      <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">10%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="The Triple Burden of Returns"
            subtitle="E-commerce returns create a significant burden across three key dimensions: environmental impact, financial costs, and logistical challenges."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              title="Environmental Impact"
              value="24M"
              description="Metric tons of CO₂ emissions from e-commerce returns annually"
              icon={Leaf}
              color="primary"
            />
            
            <StatCard 
              title="Financial Cost"
              value="$25B"
              description="Projected revenue loss for Indian brands by 2025 due to returns"
              icon={PiggyBank}
              color="secondary"
            />
            
            <StatCard 
              title="Return Rate"
              value="17.6%"
              description="Average return rate across all e-commerce categories in India"
              icon={ShoppingBag}
              color="accent"
            />
          </div>
        </div>
      </section>
      
      {/* Key Findings Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Key Research Findings"
            subtitle="Our comprehensive analysis of the e-commerce return ecosystem in India has revealed several critical insights."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-4">
                Consumer Behavior
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-semibold">1</span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    <span className="font-medium">Cash on Delivery Preference:</span> COD orders have a 24% return rate compared to only 10% for prepaid orders.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-semibold">2</span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    <span className="font-medium">Bracket Buying:</span> 92% of consumers have bought online specifically because of easy, free returns, often purchasing multiple sizes/variations.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-semibold">3</span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    <span className="font-medium">Size & Quality Issues:</span> 40% of fashion/footwear returns are due to fit/size problems, highlighting information gaps.
                  </p>
                </li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-4">
                Industry Response
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-semibold">1</span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    <span className="font-medium">Stricter Policies:</span> Major platforms like Myntra have introduced penalties (₹299 fee) for frequent returners and suspended "Try & Buy" models.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-semibold">2</span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    <span className="font-medium">Technology Integration:</span> Investment in virtual try-ons, AI for size recommendations, and enhanced product information.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-semibold">3</span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    <span className="font-medium">Growing Market:</span> India's reverse logistics sector valued at ~₹2.75 lakh crore (~$33.2B), projected to reach ~$57.5B by 2033.
                  </p>
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/research"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              Explore detailed research findings
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            Ready to Explore the Solutions?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Discover how system dynamics and causal loop analysis can help identify leverage points for creating a more sustainable e-commerce ecosystem.
          </p>
          <Link 
            to="/solutions"
            className="px-8 py-4 bg-white text-primary-700 hover:bg-primary-50 font-medium rounded-lg transition-colors inline-flex items-center"
          >
            View Solutions
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;