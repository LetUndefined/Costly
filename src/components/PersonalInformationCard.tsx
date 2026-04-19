import { useContext } from "react";
import { LifeItemContext } from "../context/LifeItemContext";

const PersonalInformationCard = () => {
  const context = useContext(LifeItemContext);
  if (!context) return null;
  const { lifeItem } = context;
  const addedItems = lifeItem.slice(3);

  return (
    <div className="flex flex-wrap gap-2">
      {addedItems.map((e) => (
        <div className="flex flex-col border border-border rounded-lg items-center justify-center p-1 bg-card aspect-square w-[calc(33.333%-0.34rem)]" key={e.name}>
          <span className="font-bold text-md truncate w-full text-center">{e.name}</span>
          <span className="font-black text-2xl text-accent">{e.cost.toFixed(2)}x</span>
        </div>
      ))}
    </div>
  );
};

export default PersonalInformationCard;
