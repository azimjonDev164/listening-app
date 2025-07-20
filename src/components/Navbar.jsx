import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a href="#part1">Part 1</a>
            </li>
            <li>
              <a href="#part2">Part 2</a>
            </li>
            <li>
              <a href="#part3">Part 3</a>
            </li>
            <li>
              <a href="#part4">Part 4</a>
            </li>
          </ul>
        </div>

        {/* Logo / Title */}
        <a className="text-xl font-black text-red-500 hover:text-red-600 cursor-pointer">
          IELTS
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#part1">Part 1</a>
          </li>
          <li>
            <a href="#part2">Part 2</a>
          </li>
          <li>
            <a href="#part3">Part 3</a>
          </li>
          <li>
            <a href="#part4">Part 4</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-primary">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
