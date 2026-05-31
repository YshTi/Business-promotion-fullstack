export type PricingPlan = {
  id: number;
  title: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  isPopular?: boolean;
};