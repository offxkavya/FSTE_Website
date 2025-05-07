import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchCategoryBreakdown } from '../../api/apiService';
import Card from '../ui/Card';

interface CategoryData {
  category: string;
  percentage: number;
}

const CategoryReturnChart: React.FC = () => {
  const [data, setData] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const categories = await fetchCategoryBreakdown();
        setData(categories);
        setError(null);
      } catch (err) {
        setError('Failed to load category breakdown data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <Card title="Category Return Rates">
        <div className="h-64 flex items-center justify-center">
          <p className="text-neutral-500 dark:text-neutral-400">Loading data...</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="Category Return Rates">
        <div className="h-64 flex items-center justify-center">
          <p className="text-red-500">{error}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card title="Category Return Rates (%)">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              type="number" 
              stroke="#6B7280"
              style={{
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
            />
            <YAxis 
              type="category"
              dataKey="category" 
              stroke="#6B7280"
              style={{
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
              width={80}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
              formatter={(value) => [`${value}%`, 'Return Rate']}
            />
            <Legend />
            <Bar 
              dataKey="percentage" 
              name="Return Rate" 
              fill="#1eaef8" 
              animationDuration={1500} 
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default CategoryReturnChart;