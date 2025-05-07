import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchReturnRatesTrend } from '../../api/apiService';
import Card from '../ui/Card';

interface ReturnRate {
  year: number;
  rate: number;
}

const ReturnRatesChart: React.FC = () => {
  const [data, setData] = useState<ReturnRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const rates = await fetchReturnRatesTrend();
        setData(rates);
        setError(null);
      } catch (err) {
        setError('Failed to load return rates data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <Card title="Return Rates Trend">
        <div className="h-64 flex items-center justify-center">
          <p className="text-neutral-500 dark:text-neutral-400">Loading data...</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="Return Rates Trend">
        <div className="h-64 flex items-center justify-center">
          <p className="text-red-500">{error}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card title="Return Rates Trend (%)">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="year" 
              stroke="#6B7280"
              style={{
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
            />
            <YAxis 
              stroke="#6B7280"
              style={{
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
              }}
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
              labelFormatter={(value) => `Year: ${value}`}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="rate" 
              name="Return Rate" 
              stroke="#2aa371" 
              strokeWidth={2} 
              activeDot={{ r: 6 }} 
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ReturnRatesChart;