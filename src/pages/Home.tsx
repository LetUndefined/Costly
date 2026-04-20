import PriceSetter from "../components/home/PriceSetter";
import ResultsList from "../components/home/ResultsList";
import SalarySetup from "../components/home/SalarySetup";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <SalarySetup />
      <PriceSetter />
      <ResultsList />
    </div>
  );
};

export default Home;
