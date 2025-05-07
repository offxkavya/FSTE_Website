import { 
  ReturnRateData, 
  CategoryReturnData, 
  EnvironmentalImpactData,
  CLDData,
  SolutionItem
} from '../types/types';
import { 
  ShoppingBag, 
  Shirt, 
  Smartphone, 
  Gift, 
  ShoppingCart, 
  PiggyBank,
  Truck,
  PackageOpen,
  CloudCog,
  Ruler,
  BadgeInfo,
  ShieldCheck,
  Recycle,
  Leaf,
  Scale,
  Building2
} from 'lucide-react';

export const returnRatesByYear: ReturnRateData[] = [
  { year: 2021, overallRate: 17.4, codRate: 23.8, prepaidRate: 11.5 },
  { year: 2022, overallRate: 15.8, codRate: 20.5, prepaidRate: 11.4 },
  { year: 2023, overallRate: 10.0, codRate: 24.0, prepaidRate: 10.0 }
];

export const categoryReturnRates: CategoryReturnData[] = [
  { category: 'Fashion & Apparel', returnRate: 35, icon: 'Shirt' },
  { category: 'Footwear', returnRate: 30, icon: 'Boot' },
  { category: 'Electronics', returnRate: 15, icon: 'Smartphone' },
  { category: 'Beauty', returnRate: 12, icon: 'Palette' },
  { category: 'Home & Furniture', returnRate: 10, icon: 'Sofa' },
  { category: 'FMCG & Grocery', returnRate: 7, icon: 'ShoppingBasket' }
];

export const environmentalImpact: EnvironmentalImpactData[] = [
  { 
    metric: 'CO₂ Emissions', 
    value: 24, 
    unit: 'million metric tons/year', 
    description: 'Annual carbon emissions from global e-commerce returns', 
    icon: 'CloudCog' 
  },
  { 
    metric: 'Packaging Waste', 
    value: 4.8, 
    unit: 'times more waste', 
    description: 'Online returns generate 4.8× more packaging waste than in-store shopping', 
    icon: 'PackageOpen' 
  },
  { 
    metric: 'Landfill Waste', 
    value: 25, 
    unit: 'percent', 
    description: 'Approximately 25% of returned items go straight to landfill', 
    icon: 'Trash2' 
  }
];

export const financialImpact = [
  { 
    metric: 'Revenue Loss', 
    value: 25, 
    unit: 'billion USD', 
    description: 'Projected revenue loss for Indian brands by 2025 due to returns', 
    icon: 'PiggyBank' 
  },
  { 
    metric: 'Reverse Logistics Market', 
    value: 33.2, 
    unit: 'billion USD', 
    description: 'Current value of India\'s reverse logistics market', 
    icon: 'Truck' 
  },
  { 
    metric: 'Return Fraud', 
    value: 13.7, 
    unit: 'percent', 
    description: 'Percentage of returns that are fraudulent globally', 
    icon: 'ShieldAlert' 
  }
];

export const cldData: CLDData = {
  nodes: [
    { id: 'returnRate', name: 'Return Rate', size: 20 },
    { id: 'impulsivePurchase', name: 'Impulsive Purchase', size: 15 },
    { id: 'quality', name: 'Product Quality', size: 15 },
    { id: 'ecommerceWaste', name: 'E-commerce Waste', size: 18 },
    { id: 'operationalCost', name: 'Operational Cost', size: 15 },
    { id: 'profit', name: 'Profit', size: 17 },
    { id: 'productImprovement', name: 'Product Improvement', size: 15 },
    { id: 'strictReturnPolicy', name: 'Strict Return Policy', size: 15 },
    { id: 'returnReasonTracking', name: 'Return Reason Tracking', size: 15 },
    { id: 'trust', name: 'Trust', size: 18 },
    { id: 'brandVisibility', name: 'Brand Visibility', size: 15 },
    { id: 'sales', name: 'Sales', size: 16 },
    { id: 'goodReview', name: 'Good Reviews', size: 15 },
    { id: 'trustedProductTag', name: 'Trusted Product Tag', size: 15 },
    { id: 'investmentOnProductInfo', name: 'Investment on Product Info', size: 15 },
    { id: 'productRepresentation', name: 'Product Representation', size: 15 },
    { id: '3dView', name: '3D View', size: 13 },
    { id: 'accurateFitScale', name: 'Accurate Fit Scale', size: 13 }
  ],
  links: [
    { source: 'returnRate', target: 'ecommerceWaste', polarity: 'positive' },
    { source: 'quality', target: 'returnRate', polarity: 'negative' },
    { source: 'ecommerceWaste', target: 'operationalCost', polarity: 'positive' },
    { source: 'operationalCost', target: 'profit', polarity: 'negative' },
    { source: 'operationalCost', target: 'productImprovement', polarity: 'positive' },
    { source: 'productImprovement', target: 'quality', polarity: 'positive' },
    { source: 'returnRate', target: 'impulsivePurchase', polarity: 'negative' },
    { source: 'impulsivePurchase', target: 'returnRate', polarity: 'positive' },
    { source: 'strictReturnPolicy', target: 'returnRate', polarity: 'negative' },
    { source: 'strictReturnPolicy', target: 'returnReasonTracking', polarity: 'positive' },
    { source: 'returnReasonTracking', target: 'productImprovement', polarity: 'positive' },
    { source: 'productImprovement', target: 'trust', polarity: 'positive' },
    { source: 'trust', target: 'profit', polarity: 'positive' },
    { source: 'brandVisibility', target: 'trust', polarity: 'negative' },
    { source: 'sales', target: 'brandVisibility', polarity: 'positive' },
    { source: 'goodReview', target: 'sales', polarity: 'positive' },
    { source: 'goodReview', target: 'trust', polarity: 'positive' },
    { source: 'trustedProductTag', target: 'trust', polarity: 'positive' },
    { source: 'investmentOnProductInfo', target: 'profit', polarity: 'positive' },
    { source: 'investmentOnProductInfo', target: 'productRepresentation', polarity: 'positive' },
    { source: 'productRepresentation', target: 'trustedProductTag', polarity: 'positive' },
    { source: 'productRepresentation', target: '3dView', polarity: 'positive' },
    { source: 'productRepresentation', target: 'accurateFitScale', polarity: 'positive' }
  ]
};

export const solutions: SolutionItem[] = [
  {
    id: '1',
    title: 'Enhanced Product Information',
    description: 'Implement detailed descriptions, size charts, and user reviews to reduce fit/size uncertainty.',
    impact: 'high',
    implementation: 'medium',
    category: 'technology',
    icon: 'BadgeInfo'
  },
  {
    id: '2',
    title: 'Virtual Try-On Technology',
    description: 'Integrate AR/VR solutions allowing customers to visualize products before purchase.',
    impact: 'high',
    implementation: 'hard',
    category: 'technology',
    icon: 'Smartphone'
  },
  {
    id: '3',
    title: 'Return Policy Optimization',
    description: 'Implement tiered return policies based on purchase history and product category.',
    impact: 'medium',
    implementation: 'easy',
    category: 'policy',
    icon: 'ClipboardList'
  },
  {
    id: '4',
    title: 'Green Logistics Integration',
    description: 'Create localized collection points and eco-friendly packaging to reduce environmental impact.',
    impact: 'medium',
    implementation: 'medium',
    category: 'logistics',
    icon: 'Recycle'
  },
  {
    id: '5',
    title: 'Customer Education Campaign',
    description: 'Launch initiatives to increase awareness about the environmental impact of returns.',
    impact: 'medium',
    implementation: 'easy',
    category: 'consumer',
    icon: 'Leaf'
  },
  {
    id: '6',
    title: 'Dynamic Pricing for Return Risk',
    description: 'Implement AI-based dynamic pricing that factors in return probability.',
    impact: 'high',
    implementation: 'hard',
    category: 'technology',
    icon: 'Scale'
  },
  {
    id: '7',
    title: 'In-Store Return Options',
    description: 'Enable online purchases to be returned at physical stores to reduce shipping emissions.',
    impact: 'medium',
    implementation: 'medium',
    category: 'logistics',
    icon: 'Building2'
  },
  {
    id: '8',
    title: 'Trust Badges & Certifications',
    description: 'Implement a system of trust badges for products with low return rates.',
    impact: 'medium',
    implementation: 'easy',
    category: 'consumer',
    icon: 'ShieldCheck'
  }
];

export const iconMap = {
  ShoppingBag,
  Shirt,
  Smartphone,
  Gift,
  ShoppingCart,
  PiggyBank,
  Truck,
  PackageOpen,
  CloudCog,
  Ruler,
  BadgeInfo,
  ShieldCheck,
  Recycle,
  Leaf,
  Scale,
  Building2
};