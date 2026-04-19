import { Outlet, Link } from "react-router";
import Navigation from "../components/Navigation";
import { RealCostProvider } from "../context/RealCostProvider";
import { LifeItemProvider } from "../context/LifeItemProvider";
import { User } from "lucide-react";

const Layout = () => {
  return (
    <>
      <div className="w-full h-screen bg-bg flex flex-col">
        <header className="px-4 py-2 shrink-0 flex items-center justify-between">
          <div>
            <span className="font-black text-lg tracking-tight">Cost</span>
            <span className="font-black text-lg tracking-tight text-accent">
              ly
            </span>
          </div>
          <Link
            to="/profile"
            className="w-8 h-8 rounded-full bg-dark flex items-center justify-center"
          >
            <User size={16} className="text-white" />
          </Link>
        </header>
        <main className="flex-1 overflow-y-auto px-4 pb-6 min-h-0">
          <RealCostProvider>
            <LifeItemProvider>
              <Outlet />
            </LifeItemProvider>
          </RealCostProvider>
        </main>
        <Navigation />
      </div>
    </>
  );
};

export default Layout;
