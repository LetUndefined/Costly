import { SalaryContext } from "../context/SalaryInputContext";
import { useContext } from "react";

const PriceSetter = () => {
  const context = useContext(SalaryContext);
  if (!context) return null;

  const { value, setValue } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: Number(e.target.value) });
    console.log(value);
  };

  return (
    <div className="bg-card border-[0.2rem] border-accent rounded-xl flex justify-between p-6 items-center">
      <div>
        <h3 className="text-md uppercase font-bold text-muted tracking-wider">check a price</h3>
        <div className="flex items-center gap-1">
          <span className="text-dark font-extrabold text-3xl">$</span>
          <input
            id="cost"
            type="number"
            onChange={handleChange}
            placeholder="______"
            name="cost"
            className="w-full font-black text-3xl outline-none appearance-none placeholder-shown:text-subtle not-placeholder-shown:text-dark"
          />
        </div>
      </div>
      <div>
        <button className="bg-accent text-white text-xl px-4 py-2 rounded-lg font-extrabold">Calculate</button>
      </div>
    </div>
  );
};

export default PriceSetter;
