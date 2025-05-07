import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { fetchEnvironmentalMetrics } from '../../api/apiService';
import Card from '../ui/Card';
import { Cloud, PackageOpen, Trash } from 'lucide-react';

interface EnvironmentalMetrics {
  co2Emissions: {
    value: number;
    unit: string;
    trend: string;
    yearOverYear: string;
  };
  packagingWaste: {
    value: number;
    unit: string;
    trend: string;
    yearOverYear: string;
  };
  landfillPercentage: {
    value: number;
    unit: string;
    trend: string;
    yearOverYear: string;
  };
}

const EnvironmentalImpactPanel: React.FC = () => {
  const [metrics, setMetrics] = useState<EnvironmentalMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchEnvironmentalMetrics();
        setMetrics(data);
        setError(null);
      } catch (err) {
        setError('Failed to load environmental metrics');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Refresh data every 2 seconds for more frequent updates
    const intervalId = setInterval(loadData, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // Data for the pie chart showing landfill percentage
  const landfillData = metrics ? [
    { name: 'Landfill', value: metrics.landfillPercentage.value },
    { name: 'Reused/Recycled', value: 100 - metrics.landfillPercentage.value }
  ] : [];

  const COLORS = ['#e11d48', '#2aa371'];

  if (loading) {
    return (
      <Card title="Environmental Impact">
        <div className="h-64 flex items-center justify-center">
          <p className="text-neutral-500 dark:text-neutral-400">Loading environmental data...</p>
        </div>
      </Card>
    );
  }

  if (error || !metrics) {
    return (
      <Card title="Environmental Impact">
        <div className="h-64 flex items-center justify-center">
          <p className="text-red-500">{error || 'Failed to load data'}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card title="Environmental Impact">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 rounded-full mb-3">
            <Cloud size={24} />
          </div>
          <h4 className="font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-1">
            CO₂ Emissions
          </h4>
          <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {metrics.co2Emissions.value.toFixed(1)} <span className="text-sm font-normal">million tons</span>
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
            Trend: <span className="text-secondary-600 dark:text-secondary-400">{metrics.co2Emissions.yearOverYear}</span>
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full mb-3">
            <PackageOpen size={24} />
          </div>
          <h4 className="font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-1">
            Packaging Waste
          </h4>
          <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {metrics.packagingWaste.value.toFixed(1)} <span className="text-sm font-normal">billion pounds</span>
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
            Trend: <span className="text-primary-600 dark:text-primary-400">{metrics.packagingWaste.yearOverYear}</span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-3 bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 rounded-full mb-3">
            <Trash size={24} />
          </div>
          <h4 className="font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-1 text-center">
            Returns to Landfill
          </h4>
          <div className="h-28 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={landfillData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={50}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label
                >
                  {landfillData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value.toFixed(1)}%`, entry => entry.name]}
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
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1 text-center">
            {metrics.landfillPercentage.value.toFixed(1)}% of returns end up in landfills
          </p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Reducing return rates by just 5% could save an estimated 1.2 million metric tons of CO₂ 
          emissions and prevent 500 million pounds of waste from entering landfills annually.
        </p>
      </div>
    </Card>
  );
};

export default EnvironmentalImpactPanel;