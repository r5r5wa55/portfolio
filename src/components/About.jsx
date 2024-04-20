import werapol from '../assets/102409147.jpg'

export default function About() {
  return (
    <div className="md:mt-40">
       <div className=" flex  flex-col md:flex-row gap-5 items-center justify-center col-span-3">
            <div className="flex-1">
             
             <div className="w-auto sm:w-[500px] lg:w-[900px] max-w-2xl md:mx-auto mx-20">
                <h1 className="text-6xl font-extrabold py-5 text-we ">Objective</h1>
                <p className='text-white text-2xl font-bold pb-2'>จุดมุ่งหมายในการทำงาน</p>
                <p className="text-white ">
                  มีความสนใจในการเขี่ยนโค๊ดเป็นอย่างมาก จึงได้ศึกษาการเขี่ยนโค๊ดแบบ MERN Stack สั่งสมทักษะในคอร์สเรียนต่างๆ และสั่งสมประสบการณ์ในการแก้ปัญหาต่างๆจากข้อผิดพลาดที่เกิดขี้นระหว่างการศึกษา  ทั้งนี้เพื่อเปิดโอกาสให้ตัวเองได้ทำงานในสิ่งที่รัก ได้เรียนรู้ และสั่งสมประสบการณ์เพื่อเติบโตไปพร้อมกับองค์กร
                
                </p>
             </div>
            </div>
            <div className="">
                <img src={werapol} alt="" className='rounded-lg'/>
            </div>
       </div>
    </div>
  )
}
