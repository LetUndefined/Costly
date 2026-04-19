export interface RealCostContextType {
  value: { monthly: number; hourly: number; cost: number; calculatedCost: number; totalHours: number; percentage: number; netflix: number; daysToSave: number; investYears: number };

  setValue: React.Dispatch<
    React.SetStateAction<{
      monthly: number;
      hourly: number;
      cost: number;
      calculatedCost: number;
      totalHours: number;
      percentage: number;
      netflix: number;
      daysToSave: number;
      investYears: number;
    }>
  >;
}

export type ItemUnit = "%" | "days" | "€" | "x";

export interface LifeItemContextType {
  lifeItem: { name: string; cost: number; unit: ItemUnit; icon: string }[];
  userItems: { name: string; cost: number; originalPrice: number; unit: "x"; icon: string }[];
  setUserItems: React.Dispatch<React.SetStateAction<{ name: string; cost: number; originalPrice: number; unit: "x"; icon: string }[]>>;
}

export interface LifeItem {
  name: string;
  cost: number;
  icon: string;
}
