import { BiBookBookmark } from "react-icons/bi"
import { Separator } from "./ui/separator"

const WhatLearn = ()=>{
 return(
        <div  className="mt-8 p-6 lg:mx-[150px] ">
           <h1 className="items-center text-3xl p-2 font-semibold">WHAT WILL YOU LEARN</h1>
           <Separator  className="w-[420px] mt-3 mb-5"/>
           <div className="grid grid-cols-3 gap-5 mt-4  md:grid-cols-4 lg:grid-cols-5 lg:mx-11">
               <div className="bg-gray-500 border border-gray-200 rounded-lg shadow-md">
                   <BiBookBookmark  className="text-8xl text-black ml-5"/>
                       <p  className="ml-4 text-black"> Logic Idea</p>
                </div>

                <div className="bg-gray-500 border border-gray-200 rounded-lg shadow-md">
                   <BiBookBookmark  className="text-8xl text-black ml-5"/>
                       <p  className="ml-4 text-black"> Logic Idea</p>
                </div>
                <div className="bg-gray-500 border border-gray-200 rounded-lg shadow-md">
                   <BiBookBookmark  className="text-8xl text-black ml-5"/>
                       <p  className="ml-4 text-black"> Logic Idea</p>
                </div>
                <div className="bg-gray-500 border border-gray-200 rounded-lg shadow-md">
                   <BiBookBookmark  className="text-8xl text-black ml-5"/>
                       <p  className="ml-4 text-black"> Communications</p>
                </div>
                <div className="bg-gray-500 border border-gray-200 rounded-lg shadow-md">
                   <BiBookBookmark  className="text-8xl text-black ml-5"/>
                       <p  className="ml-4 text-black"> Science</p>
                </div>
                <div className="bg-gray-500 border border-gray-200 rounded-lg shadow-md">
                   <BiBookBookmark  className="text-8xl text-black ml-5"/>
                       <p  className="ml-4 text-black"> Maths</p>
                </div>
              
           </div>
        </div>
      
)}


export default WhatLearn