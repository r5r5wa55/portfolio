/* eslint-disable react/no-unescaped-entities */

import { TypeAnimation } from "react-type-animation";
import werapol from "../assets/102409147.jpg";
import Skill from "./Skill";
import About from "./About";
import Project from "./Project";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid sm:grid-cols-2  md:grid-cols-3 h-auto sm:h-[70vh] bg-[#181818] mt-20">
        <div className="col-span-1 h-auto my-auto flex items-center justify-center  mx-5">
          <img
            src={werapol}
            alt="image werapol"
            className="rounded-full w-[400px] sm:w-[500px]"
          />
        </div>

        <div className="md:col-span-2 text-white my-auto px-10 ">
          <h1 className="text-we text-5xl md:text-8xl font-extrabold">
            <span>I'm</span>
          </h1>
          <br />
          <div className="md:text-8xl text-5xl font-bold">
            <TypeAnimation
              sequence={[
                "วีระพล จาระนัย",
                3000,
                "Fontend Dev",
                1000,
                "Webdesigner",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </div>
          <h1 className="my-5 gap-5">
            My Name is Werapol Jaranai and I'm No work experience in web
            development but Learn every day.
          </h1>
          <div className="sm:flex flex-row my-5">
            <button className=" bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl w-full sm:w-44 mr-5 text-nowrap">
              Download Cv
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl  p-1 w-full sm:w-44 my-5 sm:my-0">
              <span className="flex  justify-center w-full bg-[#181818] text-white rounded-xl p-2 ">
                Project
              </span>
            </button>
          </div>
        </div>

        <Skill />
      </div>

      <About />
      <Project />
    </div>
  );
}
