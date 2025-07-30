import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
  const [display, setDisplay] = useState(false);

  const displayHandler = () => {
    setDisplay((prev) => (prev = !prev));
  };

  return (
    <div>
      <Navbar displayHandler={displayHandler} />
      <Sidebar display={display} />
      <main className="w-full px-3 mx-auto md:max-w-[1000px]  pt-[70px] lg:pl-[180px] p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
