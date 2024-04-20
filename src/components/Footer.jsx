// eslint-disable-next-line no-unused-vars
import React from "react";

import { CgFacebook, CgGlobeAlt, CgGoogle } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="bg-slate-800 flex justify-center">
      <div className="foter-container grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-0 text-white   w-10/12">
        <div className="newsletter m-5 text-sm">
          <h1 className="text-3xl font-bold mb-5 ">Work</h1>
          <p className="text-sm  text-gray-400 font-bold">ปริญาตรี</p>
          <p className="text-sm ml-2 mb-1 text-gray-400">
            มหาวิทยาลัยเทคโนโรยีราชมงคลรัตนโกสินทร์
          </p>
          <p className="text-sm  text-gray-400 font-bold">
            Coding พฤศจิกายน 2566 - เมษายน 2567
          </p>
          <p className="text-sm ml-2 text-gray-400 mb-1">
            เรียนรู้ และสั่งสมประสบการณ์การเขี่ยนโค๊ด
          </p>
          <p className="text-sm  text-gray-400  items-center font-bold">
            YMstudio กันยายัน 2564 - มีนาคม 2565
          </p>
          <p className="text-sm ml-2 text-gray-400">
            ออกแบบแบนเนอร์ไร์วนิล, นามบัตบัตร, งานสติ๊กเกอร์ไดคัท และอื่นๆ
          </p>
          <p className="text-sm  text-gray-400  items-center font-bold">
            ไทวัสดุ พฤษภาคม 2563 - สิงสิหาคม 2564
          </p>
          <p className="text-sm ml-2 text-gray-400">
            พนักงานขาย,งานบรืการ
          </p>
        </div>
        <div className="about-con flex flex-col m-5">
          <h1 className="text-3xl font-bold mb-5">About Me</h1>
          <p className="text-sm  text-gray-400">
            วีระพล จาระนัย มีประสบการณ์ในการพัฒพันาเว็บไซต์ด้วย React,
            tailwindcss และ Node.js
            รวมไปถึงประสบการณ์ในการออกแบบ จากการทำงานในการออกแบบมาระยะเวลาหนึ่ง
            และมีประสบการณ์การทำงานที่หลากหลาย
            ตั้งตั้งแต่การเป็นดีไซเนอร์ไปจนถึงพนักงานขาย
            ทำให้มีทักษะการสื่อสารและการทำงานเป็นทีมที่ดี
            และผมยังมุ่งมั่นที่จะนำความรู้และทักษะของผมมาใช้เพื่อพัฒพันาและสร้าร้งสรรค์ผลงานที่มีคุณภาพมากยิ่งขึ้น
          </p>
        </div>

        <div className="follow m-5 xl:col-span-1 md:col-span-2 ">
          <h1 className="text-3xl font-bold mb-5">Connect ME</h1>
          <p className="text-gray-400 mb-5">ยินดีเป็นอย่างยื่งที่จะได้ร่วมงาน ช่องทางการติดต่อ</p>

          <div className="flex justify-around xl:w-8/12 md:w-5/12 text-3xl ">
            <div className="xl:h-12   bg-blue-500 p-2 flex justify-center items-center rounded-full hover:bg-blue-600 hover:cursor-pointer hover:scale-125 transition  delay-200 duration-400 ease-in-out">
              <CgFacebook title="ช่องทางการสื่อสารทาง Facebook" />
            </div>
            <div className="xl:h-12   bg-blue-500 p-2 flex justify-center items-center rounded-full hover:bg-blue-600 hover:cursor-pointer hover:scale-125 transition  delay-200 duration-400 ease-in-out ">
              <BsGithub title="Github" />
            </div>
            <div className="xl:h-12   bg-blue-500 p-2 flex justify-center items-center rounded-full  hover:bg-blue-600 hover:cursor-pointer hover:scale-125 transition  delay-200 duration-400 ease-in-out">
              <CgGoogle title="Gmail" />
            </div>
            <div className="xl:h-12   bg-blue-500 p-2 flex justify-center items-center rounded-full hover:bg-blue-600 hover:cursor-pointer hover:scale-125 transition  delay-200 duration-400 ease-in-out  ">
              <CgGlobeAlt title="เว็บไซต์ที่เกี่ยวข้อง" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
