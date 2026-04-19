import { useContext, useState } from "react";
import { RealCostContext } from "../context/RealCostContext";
import EditValueModal from "./EditValueModal";

type Modal = "monthly" | "hourly" | null;

const SalarySetup = () => {
  const context = useContext(RealCostContext);
  const [modal, setModal] = useState<Modal>(null);
  if (!context) return null;

  const { value, setValue } = context;

  return (
    <div className="border bg-dark rounded-xl flex flex-col">
      <div className="m-6 flex gap-4 flex-col">
        <h1 className="text-sm tracking-widest uppercase font-bold text-muted/30">What does it really cost?</h1>
        <p className="text-white font-extrabold text-2xl leading-none">
          See any price in <span className="text-accent italic">your real life.</span>
        </p>
        <div className="flex justify-center gap-2 my-2">
          <button onClick={() => setModal("monthly")} className="flex-1 rounded-md bg-muted/10 py-2 pl-4 text-left">
            <p className="font-bold tracking-widest text-xs text-muted uppercase">Salary / MO</p>
            <div className="flex items-center gap-1">
              <span className="text-white font-extrabold text-xl">€</span>
              <span className="font-extrabold text-xl text-white">{value.monthly || <span className="text-subtle">0</span>}</span>
            </div>
          </button>
          <button onClick={() => setModal("hourly")} className="flex-1 rounded-md bg-muted/10 py-2 pl-4 text-left">
            <p className="font-bold tracking-widest text-xs text-muted uppercase">Per Hour</p>
            <div className="flex items-center gap-1">
              <span className="text-white font-extrabold text-xl">€</span>
              <span className="font-extrabold text-xl text-white">{value.hourly || <span className="text-subtle">0</span>}</span>
            </div>
          </button>
        </div>
      </div>

      {modal === "monthly" && <EditValueModal label="Monthly salary" field={modal} value={value} setValue={setValue} onClose={() => setModal(null)} />}
      {modal === "hourly" && <EditValueModal label="Hourly rate" field={modal} value={value} setValue={setValue} onClose={() => setModal(null)} />}
    </div>
  );
};

export default SalarySetup;
