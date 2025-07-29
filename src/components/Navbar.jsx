import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = ({ displayHandler }) => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Logo / Title */}
        <span className="block text-2xl md:hidden">
          <FontAwesomeIcon
            onClick={displayHandler}
            icon={faBars}
            className="text-red-600 cursor-pointer"
          />
        </span>
        <Link
          to={"/"}
          className="text-xl hidden md:block font-black text-red-500 hover:text-red-600 cursor-pointer"
        >
          IELTS
        </Link>
      </div>

      <div className="navbar-end">
        <SignedOut>
          <div className="flex justify-center">
            <SignInButton>
              <button className="px-4 cursor-pointer py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Sign In
              </button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
