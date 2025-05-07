export interface ReturnRateData {
  year: number;
  overallRate: number;
  codRate: number;
  prepaidRate: number;
}

export interface CategoryReturnData {
  category: string;
  returnRate: number;
  icon: string;
}

export interface EnvironmentalImpactData {
  metric: string;
  value: number;
  unit: string;
  description: string;
  icon: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface CLDNode {
  id: string;
  name: string;
  color?: string;
  size?: number;
}

export interface CLDLink {
  source: string;
  target: string;
  polarity: 'positive' | 'negative';
  label?: string;
}

export interface CLDData {
  nodes: CLDNode[];
  links: CLDLink[];
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  implementation: 'easy' | 'medium' | 'hard';
  category: 'technology' | 'policy' | 'consumer' | 'logistics';
  icon: string;
}