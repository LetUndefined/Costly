import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import { SalaryInputProvider } from "../context/SalaryInputProvider";

const Layout = () => {
  return (
    <>
      <div className=" w-screen h-screen bg-bg ">
        <header>
          <h3>PlaceholderName</h3>
        </header>
        <main className="px-4">
          <SalaryInputProvider>
            <Outlet />
          </SalaryInputProvider>
        </main>
        <Navigation />
      </div>
    </>
  );
};

export default Layout;
