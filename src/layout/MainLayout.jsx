import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-gray-900 flex justify-center w-full py-10">
      <div className="w-9/10 max-w-7xl">
        <Outlet />
      </div>
    </div>
  );
}
