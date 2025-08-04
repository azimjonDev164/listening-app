import { Link } from "react-router-dom";
import { tests } from "../data/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { useState } from "react";

const Sidebor = ({ display }) => {
  const [index, setIndex] = useState(null);
  return (
    <div
      className={`${
        display ? "block" : "hidden"
      } xl:block fixed top-[68px] bottom-0 left-0 z-[999] overflow-y-scroll w-64 bg-white shadow-lg border-r border-gray-200`}
    >
      <SignedOut>
        <div className="flex justify-center">
          <SignInButton>
            <button className="px-4 w-full mx-2 mt-2 cursor-pointer py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <ul className="menu bg-white rounded-none w-full p-4 space-y-2">
          {tests.map((item, idx) => (
            <li
              key={idx}
              onClick={() => setIndex(idx)}
              className={`${
                index == idx ? "bg-red-400 text-white" : "text-gray-800"
              } rounded-md border-1 border-red-500`}
            >
              <Link
                to={`/listening/${idx + 1}`}
                className="block px-4 py-2 rounded-md hover:bg-red-100 transition-all duration-200 font-mediu"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </SignedIn>
    </div>
  );
};

export default Sidebor;
