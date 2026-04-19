import { useState } from "react";
import GoalSetter from "../components/GoalSetter";
import SavingSlider from "../components/SavingSlider";
import UnderDevelopment from "../components/UnderDevelopment";

const Compare = () => {
  const [goal, setGoal] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4 py-4">
      <GoalSetter goal={goal} setGoal={setGoal} />
      <SavingSlider goal={goal} />
      <UnderDevelopment />
    </div>
  );
};

export default Compare;
