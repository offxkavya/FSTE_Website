import axios from 'axios';

const BASE_URL = 'https://eco-thinkers-api.mocki.io/v1';

// This is a mock API service that simulates real-time data
// For demo purposes, we're using randomization within realistic ranges
// In a production environment, this would connect to a real API endpoint

const getRandomChange = (base: number, range: number) => {
  return base + (Math.random() - 0.5) * range * 2; // Doubled the range for more noticeable changes
};

export const fetchReturnRatesTrend = async () => {
  try {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Base data with more variation in recent years
    const baseData = [
      { year: 2020, rate: getRandomChange(18.5, 2) },
      { year: 2021, rate: getRandomChange(17.4, 2) },
      { year: 2022, rate: getRandomChange(15.8, 2) },
      { year: 2023, rate: getRandomChange(10.0, 1.5) },
      { year: 2024, rate: getRandomChange(7.8, 1) }
    ];

    return baseData;
  } catch (error) {
    console.error('Error fetching return rates trend:', error);
    throw error;
  }
};

export const fetchCategoryBreakdown = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return [
      { category: 'Fashion', percentage: getRandomChange(35, 4) },
      { category: 'Footwear', percentage: getRandomChange(30, 4) },
      { category: 'Electronics', percentage: getRandomChange(15, 2) },
      { category: 'Beauty', percentage: getRandomChange(12, 2) },
      { category: 'Home', percentage: getRandomChange(10, 2) },
      { category: 'Grocery', percentage: getRandomChange(7, 1) }
    ];
  } catch (error) {
    console.error('Error fetching category breakdown:', error);
    throw error;
  }
};

export const fetchEnvironmentalMetrics = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      co2Emissions: {
        value: getRandomChange(24, 2),
        unit: 'million metric tons',
        trend: 'increasing',
        yearOverYear: `${getRandomChange(5, 1).toFixed(1)}%`
      },
      packagingWaste: {
        value: getRandomChange(9.5, 1),
        unit: 'billion pounds',
        trend: 'increasing',
        yearOverYear: `${getRandomChange(8, 1.5).toFixed(1)}%`
      },
      landfillPercentage: {
        value: getRandomChange(25, 3),
        unit: 'percent',
        trend: 'stable',
        yearOverYear: `${getRandomChange(0, 2).toFixed(1)}%`
      }
    };
  } catch (error) {
    console.error('Error fetching environmental metrics:', error);
    throw error;
  }
};

export const fetchFinancialImpact = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    return {
      revenueLoss: {
        india: getRandomChange(25, 2),
        global: getRandomChange(743, 15),
        unit: 'billion USD'
      },
      reverseLogistics: {
        currentValue: getRandomChange(33.2, 2),
        projectedValue2033: getRandomChange(57.5, 3),
        unit: 'billion USD'
      },
      returnFraud: {
        percentage: getRandomChange(13.7, 1),
        trend: 'increasing',
        yearOverYear: `${getRandomChange(2.1, 0.5).toFixed(1)}%`
      }
    };
  } catch (error) {
    console.error('Error fetching financial impact data:', error);
    throw error;
  }
};

export const fetchConsumerBehaviorData = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 900));
    
    return {
      returnReasons: [
        { reason: 'Wrong Size/Fit', percentage: getRandomChange(40, 4) },
        { reason: 'Item Not as Described', percentage: getRandomChange(22, 3) },
        { reason: 'Changed Mind', percentage: getRandomChange(18, 3) },
        { reason: 'Defective Item', percentage: getRandomChange(12, 2) },
        { reason: 'Other', percentage: getRandomChange(8, 1) }
      ],
      purchaseInfluencers: [
        { factor: 'Free Returns', percentage: getRandomChange(92, 3) },
        { factor: 'Detailed Product Info', percentage: getRandomChange(78, 3) },
        { factor: 'Product Reviews', percentage: getRandomChange(72, 3) },
        { factor: 'Clear Return Policy', percentage: getRandomChange(68, 3) },
        { factor: 'Product Images', percentage: getRandomChange(65, 3) }
      ]
    };
  } catch (error) {
    console.error('Error fetching consumer behavior data:', error);
    throw error;
  }
};

export default {
  fetchReturnRatesTrend,
  fetchCategoryBreakdown,
  fetchEnvironmentalMetrics,
  fetchFinancialImpact,
  fetchConsumerBehaviorData
};