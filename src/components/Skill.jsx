import tailwind from '../assets/pngaaa.com-6447779.png'
import css from '../assets/pngegg (1).png'
import js from '../assets/pngegg (3).png'
import nodepng from '../assets/pngegg (4).png'
import reactpng from '../assets/pngegg (5).png'

export default function Skill() {
  return (
    <div className='sm:col-span-3 '>
      <div className="text-center w-full mb-5 "><h1 className='text-we  sm:mt-20 text-6xl font-extrabold '>Skill</h1></div>
      <h1 className='text-white text-center my-5 text-xl '>MERN Stack React</h1>
      <div className="flex w-full justify-around items-center  border-2  md:m-5 p-5 rounded-lg">
        <div className="lg:w-24 sm:w-16 w-10"><img src={css} alt="" /></div>
        <div className="lg:w-24 sm:w-16 w-10"><img src={js} alt="" /></div>
        <div className="lg:w-24 sm:w-16 w-10"><img src={nodepng} alt="" /></div>
        <div className="lg:w-24 sm:w-16 w-10"><img src={reactpng} alt="" /></div>
        <div className="lg:w-24 sm:w-16 w-10"><img src={tailwind} alt="" /></div>

        </div>
    </div>
  )
}
