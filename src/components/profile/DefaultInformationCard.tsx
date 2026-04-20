import { useContext } from "react";
import { LifeItemContext } from "../../context/LifeItemContext";

const DefaultInformationCard = () => {
  const context = useContext(LifeItemContext);
  if (!context) return null;
  const { lifeItem } = context;
  const prefixedItems = lifeItem.slice(0, 3);

  return (
    <div className="flex flex-col ">
      {prefixedItems.map((e) => (
        <div className="flex justify-between border-b border-border last:border-b-0 px-5 py-4" key={e.name}>
          <span>{e.name}</span>
          <span className="font-black">{e.unit === "€" ? `€${e.cost.toFixed(2)}` : e.unit === "days" ? `${e.cost.toFixed(1)} days` : e.unit === "%" ? `${e.cost.toFixed(2)}%` : `${e.cost.toFixed(2)}x`}</span>
        </div>
      ))}
    </div>
  );
};

export default DefaultInformationCard;
