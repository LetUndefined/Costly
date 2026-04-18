export interface SalaryContextType {
  value: { monthly: number; hourly: number; cost: number };
  setValue: React.Dispatch<React.SetStateAction<{ monthly: number; hourly: number; cost: number }>>;
}
