import PriceSetter from "../components/PriceSetter";
import SalarySetup from "../components/SalarySetup";

const Home = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <SalarySetup />
      <PriceSetter />
    </div>
  );
};

export default Home;
