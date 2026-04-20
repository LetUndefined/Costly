import { useContext } from "react";
import { RealCostContext } from "../../context/RealCostContext";
import TotalHours from "./TotalHours";
import DefaultInformationCard from "../profile/DefaultInformationCard";
import PersonalInformationCard from "../profile/PersonalInformationCard";

const ResultsList = () => {
  const context = useContext(RealCostContext);
  if (!context) return null;

  const { value } = context;

  return (
    <div>
      <header>
        <h3 className="text-md tracking-widest uppercase font-bold text-muted">What it costs you</h3>
      </header>
      <div className="flex flex-col gap-6">
        <div className="bg-card border-[0.2rem] border-border rounded-xl flex p-6 flex flex-col gap-1">
          <TotalHours totalHours={value.totalHours} />
        </div>
        <div className="border-[0.2rem] border-border rounded-xl bg-card">
          <DefaultInformationCard />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-md tracking-widest uppercase font-bold text-muted">What could this buy you?</h3>
          </div>
          <div className="flex justify-center ">
            <PersonalInformationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsList;
