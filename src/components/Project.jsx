import github from "../assets/github.jpg";

export default function Project() {
  return (
    <div className="mx-5 mt-20">
      <div className="">
        <h1 className="text-we text-6xl font-extrabold">Project</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 ">
        <div className="group ">
          <p className="text-slate-100 m-5 ">MERN Stack Blog</p>
          <div className="transition ease-in-out delay-150  hover:scale-110 duration-300  cursor-pointer relative">
            <img src={github} alt="" className="rounded-lg" />
            <div className="opacity-0 group-hover:opacity-90 absolute inset-0 flex justify-center items-center bg-[gray]/20">
              <button className="bg-slate-200 px-10 py-2 rounded-xl">
                Live
              </button>
            </div>
          </div>
        </div>
        <div className="group ">
          <p className="text-slate-100 m-5 ">MERN Stack Blog</p>
          <div className="transition ease-in-out delay-150  hover:scale-110 duration-300  cursor-pointer relative">
            <img src={github} alt="" className="rounded-lg" />
            <div className="opacity-0 group-hover:opacity-90 absolute inset-0 flex justify-center items-center bg-[gray]/20">
              <button className="bg-slate-200 px-10 py-2 rounded-xl">
                Live
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-slate-100 m-5 ">MERN Stack Blog</p>
          <div className="transition ease-in-out delay-150  hover:scale-110 duration-300  cursor-pointer ">
            <img src={github} alt="" className="rounded-lg" />
            <div className="opacity-0 hover:opacity-90 absolute inset-0 flex justify-center items-center bg-[gray]/20">
              <button className="bg-slate-200 px-10 py-2 rounded-xl">
                Live
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
