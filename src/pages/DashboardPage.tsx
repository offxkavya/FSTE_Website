import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import ReturnRatesChart from '../components/charts/ReturnRatesChart';
import CategoryReturnChart from '../components/charts/CategoryReturnChart';
import EnvironmentalImpactPanel from '../components/dashboard/EnvironmentalImpactPanel';
import { fetchFinancialImpact, fetchConsumerBehaviorData } from '../api/apiService';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingDown, Banknote, TrendingUp, ShieldAlert } from 'lucide-react';
import Card from '../components/ui/Card';

const DashboardPage: React.FC = () => {
  const [financialData, setFinancialData] = useState<any>(null);
  const [consumerData, setConsumerData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [financialResponse, consumerResponse] = await Promise.all([
          fetchFinancialImpact(),
          fetchConsumerBehaviorData()
        ]);
        
        setFinancialData(financialResponse);
        setConsumerData(consumerResponse);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const COLORS = ['#2aa371', '#1eaef8', '#ff8317', '#8b5cf6', '#f43f5e'];

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
            Real-Time Dashboard
          </h1>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            Monitor key metrics and trends in e-commerce returns across India.
          </p>
        </motion.div>

        {/* Return Rates Section */}
        <section className="mb-12">
          <SectionHeading 
            title="Return Rate Trends"
            subtitle="Track changes in return rates over time and across different categories."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ReturnRatesChart />
            <CategoryReturnChart />
          </div>
        </section>

        {/* Environmental Impact Section */}
        <section className="mb-12">
          <SectionHeading 
            title="Environmental Impact"
            subtitle="Measuring the ecological footprint of e-commerce returns."
          />

          <EnvironmentalImpactPanel />
        </section>

        {/* Financial Impact Section */}
        <section className="mb-12">
          <SectionHeading 
            title="Financial Impact"
            subtitle="Economic consequences of high return rates."
          />

          {loading ? (
            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-12 flex justify-center">
              <p className="text-neutral-500 dark:text-neutral-400">Loading financial data...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full mb-3">
                    <TrendingDown size={24} />
                  </div>
                  <h4 className="font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-1">
                    Indian Revenue Loss
                  </h4>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    ${financialData?.revenueLoss.india} <span className="text-sm font-normal">billion</span>
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                    Projected by 2025
                  </p>
                </div>
              </Card>

              <Card>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full mb-3">
                    <Banknote size={24} />
                  </div>
                  <h4 className="font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-1">
                    Global Returns Value
                  </h4>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    ${financialData?.revenueLoss.global} <span className="text-sm font-normal">billion</span>
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                    14.5% of total retail sales
                  </p>
                </div>
              </Card>

              <Card>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 rounded-full mb-3">
                    <TrendingUp size={24} />
                  </div>
                  <h4 className="font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-1">
                    Reverse Logistics
                  </h4>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    ${financialData?.reverseLogistics.currentValue} <span className="text-sm font-normal">billion</span>
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                    Growing to ${financialData?.reverseLogistics.projectedValue2033}B by 2033
                  </p>
                </div>
              </Card>

              <Card>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full mb-3">
                    <ShieldAlert size={24} />
                  </div>
                  <h4 className="font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-1">
                    Fraudulent Returns
                  </h4>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    {financialData?.returnFraud.percentage}%
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                    Trend: {financialData?.returnFraud.yearOverYear} year-over-year
                  </p>
                </div>
              </Card>
            </div>
          )}
        </section>

        {/* Consumer Behavior Section */}
        <section>
          <SectionHeading 
            title="Consumer Behavior Insights"
            subtitle="Understanding why customers return products."
          />

          {loading ? (
            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-12 flex justify-center">
              <p className="text-neutral-500 dark:text-neutral-400">Loading consumer data...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card title="Return Reasons">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={consumerData?.returnReasons}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="percentage"
                        nameKey="reason"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {consumerData?.returnReasons.map((entry: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Percentage']}
                        contentStyle={{
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Size and fit issues remain the primary reason for returns, particularly in fashion. 
                    This highlights the importance of accurate sizing information and virtual try-on solutions.
                  </p>
                </div>
              </Card>

              <Card title="Purchase Influencing Factors">
                <div className="space-y-6">
                  {consumerData?.purchaseInfluencers.map((factor: any, index: number) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-neutral-700 dark:text-neutral-300">{factor.factor}</span>
                        <span className="text-neutral-900 dark:text-neutral-100 font-medium">{factor.percentage}%</span>
                      </div>
                      <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-2.5">
                        <div 
                          className="bg-primary-600 dark:bg-primary-400 h-2.5 rounded-full" 
                          style={{ width: `${factor.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Free returns remain a major purchase motivator, with 92% of consumers citing it as a key 
                    factor in their buying decisions. This creates a challenging balance for retailers between
                    customer acquisition and return management.
                  </p>
                </div>
              </Card>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;