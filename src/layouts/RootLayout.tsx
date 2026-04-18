import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="h-screen bg-bg flex justify-center overflow-hidden">
      <div className="relative w-full h-full bg-bg flex flex-col">
        <main className="flex-1 overflow-y-auto pb-24 min-h-0">
          <Outlet />
        </main>
        {/* BottomNav goes here */}
      </div>
    </div>
  );
}
