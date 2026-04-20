import { useState, useContext } from "react";
import { RealCostContext } from "../../context/RealCostContext";
import { savingsMonthlyAmount, savingsHoursOfWork, savingsYearsToGoal } from "../../utils/Calculations";

type Props = { goal: number };

const SavingSlider = ({ goal }: Props) => {
  const [percentage, setPercentage] = useState<number>(20);
  const context = useContext(RealCostContext);
  if (!context) return null;
  const { value } = context;

  const monthly = savingsMonthlyAmount(value.monthly, percentage);
  const hours = savingsHoursOfWork(monthly, value.hourly);
  const years = savingsYearsToGoal(goal, monthly);

  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-muted">I can save</p>
        <span className="text-2xl font-black text-accent tracking-tight">{percentage}%</span>
      </div>
      <input type="range" value={percentage} min={5} max={50} onChange={(e) => setPercentage(Number(e.target.value))} className="w-full accent-accent" />
      <div className="flex justify-between">
        <span className="text-xs font-bold text-subtle">5%</span>
        <span className="text-xs font-bold text-subtle">25%</span>
        <span className="text-xs font-bold text-subtle">50%</span>
      </div>
      <div className="flex justify-between items-center pt-1 border-t border-border">
        <span className="text-xs font-semibold text-muted">
          €{monthly.toFixed(0)}/mo · {hours.toFixed(0)} hrs of work
        </span>
        <span className="text-sm font-black text-dark">{years.toFixed(1)} yrs</span>
      </div>
    </div>
  );
};

export default SavingSlider;
