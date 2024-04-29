import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  const [rightBar, setRightBar] = useState();
  return (
    <div className="max-w-7xl mx-auto  bg-[#181818]">
      <div className="flex justify-between items-center p-5 ">
        <Link to="/">
          <h1 className="text-we text-3xl font-bold">Portfolio</h1>
        </Link>
        <div className="flex gap-3 md:gap-5">
          <ul className=" gap-3 hidden sm:flex items-center">
            <Link to="/about ">
              <li className="text-white py-2">About</li>
            </Link>
            <Link to="/work">
                <li className="text-white py-2">Work</li>
              </Link>
            <li className="text-white">Contact</li>
          </ul>
          <button className="inline sm:hidden ">
            <div
              className="text-white text-3xl "
              onClick={() => setRightBar(!rightBar)}
            >
              {rightBar ? <FaTimes /> : <FaBars />}
            </div>
          </button>

          <div
            className={
              rightBar
                ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-700 inline sm:hidden "
                : "fixed left-[-100%] ease-in-out duration-700 h-full w-[60%] top-0"
            }
          >
            <h1 className="text-we text-3xl font-bold m-5">Werapol</h1>
            <ul className=" gap-3 text-xl pb-8 px-5">
              <li className="text-white py-2">Home</li>
              <Link to="/about">
                <li className="text-white py-2">About</li>
              </Link>
              <Link to="/work">
                <li className="text-white py-2">Work</li>
              </Link>

              <li className="text-white py-2">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
