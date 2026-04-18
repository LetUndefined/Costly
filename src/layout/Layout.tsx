import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import { RealCostProvider } from "../context/RealCostProvider";

const Layout = () => {
  return (
    <>
      <div className="w-full h-screen bg-bg flex flex-col">
        <header className="px-4 py-4 shrink-0">
          <span className="font-black text-lg tracking-tight">Cost</span><span className="font-black text-lg tracking-tight text-accent">ly</span>
        </header>
        <main className="flex-1 overflow-y-auto px-4 pb-20 min-h-0">
          <RealCostProvider>
            <Outlet />
          </RealCostProvider>
        </main>
        <Navigation />
      </div>
    </>
  );
};

export default Layout;
