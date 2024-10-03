import Image from "next/image";
import { BiUserPlus } from "react-icons/bi";
import { Button } from "./ui/button";
import Link from "next/link";
import { BiBookBookmark } from "react-icons/bi";

import { FaChalkboardTeacher } from "react-icons/fa";


const  ACHIEVEMENTS = ()=>{
    return(
           <div className="flex items-center bg-[url('/tutor.jpg')] justify-center flex-col ">

              <h1 className="text-5xl font-bold mt-11 text-black my-3">Our ACHIEVEMENTS</h1>
              <p className="my-1 font-semibold  text-black">HERE YOU CAN REVIEW SOME OF THE STATISTICS OF MILESTONES ACHIEVED DURING OUR YEARS OF SERVICE.</p>

                  
                <div className="flex flex-col mt-[350PX] gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
                         <div className="flex flex-col ">

                         <BiUserPlus  className="text-8xl text-black"/>

                        <p className="text-2xl font-semibold  text-black">3000</p>
                        <p className="text-black font-semibold text-xl">STUDENTS ENROLLED</p>
                         </div>
                         <div className="flex flex-col ">

                         <BiBookBookmark  className="text-8xl text-black"/>

                        <p className="text-2xl font-semibold text-black">10000</p>
                        <p className="text-black font-semibold text-xl">CLASSES COMPLETE</p>
                         </div>
                         <div className="flex flex-col ">

                         <FaChalkboardTeacher  className="text-8xl text-black"/>

                        <p className="text-2xl font-semibold text-black">3000</p>
                        <p className="text-black font-semibold text-xl">Tutors/Educators </p>
                         </div>

                   </div>

                   <div className="mt-[160PX]">
                        <Link href='/learn'>
                           <Button variant='outline' className="bg-blue-600 text-xl hover:text-2xl hover:bg-blue-600  hover:text-white">
                               Learn More
                            </Button>
                         </Link>
                   </div>
           </div>

    )
}

export default ACHIEVEMENTS;