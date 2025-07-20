import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-[1000px] mx-auto pt-[70px] p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
