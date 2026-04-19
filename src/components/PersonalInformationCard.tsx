import { useContext } from "react";
import { LifeItemContext } from "../context/LifeItemContext";
import { NavLink } from "react-router";

const PersonalInformationCard = () => {
  const context = useContext(LifeItemContext);
  if (!context) return null;
  const { lifeItem } = context;
  const addedItems = lifeItem.slice(3);

  return (
    <div className="flex flex-wrap gap-2 justify-center border-[0.2rem] w-full border-border p-4 bg-card rounded-lg">
      {addedItems.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-4 text-center">
          <p className="text-muted text-sm font-bold">No items yet</p>
          <p className="text-subtle text-xs">
            Add items in{" "}
            <NavLink to="/mylife" className="text-accent font-bold underline">
              My Life
            </NavLink>
          </p>
        </div>
      ) : (
        addedItems.map((e) => (
          <div className="flex flex-col border border-border rounded-lg items-center justify-center px-4 bg-bg aspect-square min-w-[6rem] max-w-[6rem] " key={e.name}>
            <span className="font-bold text-md truncate w-full text-center capitalize ">{e.name.toLowerCase()}</span>
            <span className="font-black text-3xl text-accent">{e.cost.toFixed(0)}x</span>
          </div>
        ))
      )}
    </div>
  );
};

export default PersonalInformationCard;
