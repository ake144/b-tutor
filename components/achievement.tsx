import Image from "next/image";
import { BiUserPlus } from "react-icons/bi";
import { Button } from "./ui/button";
import Link from "next/link";
import { BiBookBookmark } from "react-icons/bi";

import { FaChalkboardTeacher } from "react-icons/fa";


const  ACHIEVEMENTS = ()=>{
    return(
           <div className="flex items-center bg-[url('/lead.jpg')] justify-center flex-col ">

              <h1 className="text-5xl font-bold mt-11 my-8">Our ACHIEVEMENTS</h1>
              <p className="my-4 font-semibold  ">HERE YOU CAN REVIEW SOME OF THE STATISTICS OF MILESTONES ACHIEVED DURING OUR YEARS OF SERVICE.</p>

                  
                <div className="flex flex-col mt-[350PX] gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
                         <div className="flex flex-col ">

                         <BiUserPlus  className="text-8xl"/>

                        <p className="text-2xl font-semibold text-orange-500">3000</p>
                        <p className="text-purple-600 text-xl">STUDENTS ENROLLED</p>
                         </div>
                         <div className="flex flex-col ">

                         <BiBookBookmark  className="text-8xl"/>

                        <p className="text-2xl font-semibold text-orange-500">10000</p>
                        <p className="text-purple-600 text-xl">CLASSES COMPLETE</p>
                         </div>
                         <div className="flex flex-col ">

                         <FaChalkboardTeacher  className="text-8xl"/>

                        <p className="text-2xl font-semibold text-orange-500">3000</p>
                        <p className="text-purple-600 text-xl">Tutors/Educators </p>
                         </div>

                   </div>

                   <div className="mt-[160PX]">
                        <Link href='/learn'>
                           <Button variant='outline' className="bg-blue-600">
                               Learn More
                            </Button>
                         </Link>
                   </div>
           </div>

    )
}

export default ACHIEVEMENTS;