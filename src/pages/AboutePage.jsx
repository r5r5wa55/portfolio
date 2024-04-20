// eslint-disable-next-line no-unused-vars
import React from "react";
import se from "../assets/se.jpg";
export default function AboutePage() {
  return (
    <div>
      <div className="bg-wecolor h-60 flex flex-col justify-center items-center text-white sm:mb-11 mb-0">
        <h2 className="font-bold text-2xl">HOME.ABOUT</h2>
        <h1 className="text-6xl font-extrabold text-about m-0">About Us</h1>
      </div>

      <div className=" grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-full">
        <div className="w-full flex flex-col items-center">
          <div className="w-4/5 ">
            <div className="flex flex-col">
              <h1 className="text-6xl font-extrabold  text-about">
                Burned out
              </h1>
              <h1 className="text-2xl font-extrabold  text-red-800">
                หมดไฟกับการทำเว็บ <h1 className="text-we">!</h1>
              </h1>
            </div>
            <h2 className="md:w-full text-white">
              ปัญหาที่
            </h2>
          </div>
          <div className="my-5 w-full flex justify-center ">
            <div className="flex justify-center w-full px-10 md:p-2">
              <div className="rounded-2xl border border-slate-300  h-full">
                <img
                  src={se}
                  alt=""
                  className="w-full rounded-2xl h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
          <div className="w-4/5">
            <div className="font-bold text-3xl">อุปนิสัย</div>
            <div className="font-thin xl:text-xl w-full text-white mt-4 text-lg">
              การสื่อสาร
            </div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl hover:cursor-pointer  hover:scale-110 transition  delay-200 duration-400 ease-in-out ">
              <div className="w-3/5 bg-about p-1 rounded-xl"></div>
            </div>
            <div className="font-thin xl:text-xl w-full text-white mt-4 text-lg">
              ทัศนคติเชิงบวก
            </div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl">
              <div className="w- bg-about p-1 rounded-xl"></div>
            </div>
            <div className="font-thin xl:text-xl w-full text-white mt-4 text-lg truncate ... hover:text-clip">
              การจัดการกสถานการณ์ และ การเปิดรับโอกาสใหม่ ๆ
            </div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl">
              <div className="w-4/5 bg-about p-1 rounded-xl"></div>
            </div>
            <div className="font-thin xl:text-xl w-full text-white mt-4 text-lg">
              การทำงานเป็นทีม การปรับตัว
            </div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl">
              <div className="w-3/5 bg-about p-1 rounded-xl"></div>
            </div>
            <div className="font-thin text-xl w-full text-white mt-4">
              ความรับผิดชอบ{" "}
            </div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl">
              <div className="w-5/5 bg-about p-1 rounded-xl"></div>
            </div>
            <div className="font-thin text-xl w-full text-white mt-4">
              ความคิดสร้างสรรค์
            </div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl mb-10">
              <div className="w-4/5 bg-about p-1 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
