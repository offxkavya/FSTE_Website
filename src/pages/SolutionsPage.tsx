import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BadgeInfo, 
  Smartphone,
  ClipboardList,
  Recycle,
  Leaf,
  Scale,
  Building2,
  ShieldCheck,
  Filter,
  Check
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { solutions } from '../data/staticData';

type SolutionCategory = 'all' | 'technology' | 'policy' | 'consumer' | 'logistics';
type ImpactLevel = 'all' | 'high' | 'medium' | 'low';

const SolutionsPage: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<SolutionCategory>('all');
  const [impactFilter, setImpactFilter] = useState<ImpactLevel>('all');

  const iconMap = {
    BadgeInfo,
    Smartphone,
    ClipboardList,
    Recycle,
    Leaf,
    Scale,
    Building2,
    ShieldCheck
  };

  const filteredSolutions = solutions.filter(solution => {
    if (categoryFilter !== 'all' && solution.category !== categoryFilter) {
      return false;
    }
    if (impactFilter !== 'all' && solution.impact !== impactFilter) {
      return false;
    }
    return true;
  });

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
            Solutions & Recommendations
          </h1>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            Practical interventions to reduce e-commerce returns and their environmental impact.
          </p>
        </motion.div>

        {/* Filters Section */}
        <section className="mb-10">
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <Filter className="text-neutral-600 dark:text-neutral-400 mr-2" size={20} />
                <h3 className="font-medium text-lg text-neutral-900 dark:text-neutral-100">
                  Filter Solutions
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                    Solution Category
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'technology', 'policy', 'consumer', 'logistics'].map((category) => (
                      <button
                        key={category}
                        onClick={() => setCategoryFilter(category as SolutionCategory)}
                        className={`px-4 py-2 text-sm rounded-full transition-colors ${
                          categoryFilter === category
                            ? 'bg-primary-600 text-white'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                        }`}
                      >
                        {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                    Impact Level
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'high', 'medium', 'low'].map((impact) => (
                      <button
                        key={impact}
                        onClick={() => setImpactFilter(impact as ImpactLevel)}
                        className={`px-4 py-2 text-sm rounded-full transition-colors ${
                          impactFilter === impact
                            ? 'bg-secondary-600 text-white'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                        }`}
                      >
                        {impact === 'all' ? 'All Impact Levels' : impact.charAt(0).toUpperCase() + impact.slice(1) + ' Impact'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="mb-16">
          <SectionHeading 
            title="Recommended Interventions"
            subtitle="Based on our system dynamics analysis, we've identified these high-leverage interventions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((solution) => {
              const Icon = iconMap[solution.icon as keyof typeof iconMap];
              
              // Impact indicator color
              const impactColor = {
                high: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
                medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
                low: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
              };
              
              // Implementation difficulty indicator color
              const implementationColor = {
                easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
                medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
                hard: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              };
              
              return (
                <Card key={solution.id}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-start mb-4">
                      <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mr-4">
                        {Icon && <Icon size={24} />}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-neutral-900 dark:text-neutral-100">
                          {solution.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${impactColor[solution.impact]}`}>
                            {solution.impact.charAt(0).toUpperCase() + solution.impact.slice(1)} Impact
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${implementationColor[solution.implementation]}`}>
                            {solution.implementation.charAt(0).toUpperCase() + solution.implementation.slice(1)} Implementation
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                            {solution.category.charAt(0).toUpperCase() + solution.category.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-neutral-700 dark:text-neutral-300 mb-6 flex-grow">
                      {solution.description}
                    </p>
                    
                    <div className="mt-auto">
                      <h4 className="font-medium text-sm text-neutral-800 dark:text-neutral-200 mb-2">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">
                            {solution.category === 'technology' && 'Improves purchase confidence'}
                            {solution.category === 'policy' && 'Creates appropriate incentives'}
                            {solution.category === 'consumer' && 'Increases awareness'}
                            {solution.category === 'logistics' && 'Reduces transportation emissions'}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">
                            {solution.impact === 'high' && 'Significant return rate reduction'}
                            {solution.impact === 'medium' && 'Moderate return rate reduction'}
                            {solution.impact === 'low' && 'Incremental return rate reduction'}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="mb-16">
          <SectionHeading 
            title="Best Practices from Global Leaders"
            subtitle="Successful approaches implemented by e-commerce companies around the world."
          />

          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-4">
                    Enhanced Product Information
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    Retailers that provide comprehensive product details see significantly lower return rates.
                  </p>
                  <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium">1</span>
                      </div>
                      <span>ASOS: 360° product videos reduced returns by 23%</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium">2</span>
                      </div>
                      <span>Nike: AR try-on feature decreased returns by 17%</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium">3</span>
                      </div>
                      <span>Warby Parker: Home try-on kits reduced final returns</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-4">
                    Optimized Return Policies
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    Smart return policies balance customer satisfaction with business sustainability.
                  </p>
                  <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-secondary-100 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium">1</span>
                      </div>
                      <span>Amazon: Return processing fee for high-return sellers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-secondary-100 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium">2</span>
                      </div>
                      <span>Zara: Charging for online returns reduced rate by 15%</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-secondary-100 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium">3</span>
                      </div>
                      <span>Target: In-store return option for online purchases</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-xl text-neutral-900 dark:text-neutral-100 mb-4">
                    Sustainable Practices
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    Eco-friendly return handling reduces environmental impact while improving brand image.
                  </p>
                  <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-accent-100 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium">1</span>
                      </div>
                      <span>H&M: Reusable packaging for delivery and returns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-accent-100 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium">2</span>
                      </div>
                      <span>Patagonia: Repair service to avoid product returns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-accent-100 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium">3</span>
                      </div>
                      <span>ThredUP: Carbon-neutral shipping for returns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-900 dark:to-primary-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-display font-semibold text-white mb-4">
                Ready to Explore the Real-Time Data?
              </h2>
              <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
                View our interactive dashboard with live return rate trends, environmental metrics, and economic indicators.
              </p>
              <Link 
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-700 hover:bg-primary-50 rounded-lg font-medium transition-colors"
              >
                View Dashboard
                <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SolutionsPage;