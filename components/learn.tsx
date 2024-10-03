import { BiBookBookmark } from "react-icons/bi"
import { Separator } from "./ui/separator"

const WhatLearn = ()=>{
 return(
        <div  className="mt-8 p-6">
           <h1 className="items-center text-3xl p-2 font-semibold">WHAT WILL YOU LEARN</h1>
           <Separator  className="w-[420px] mt-3 mb-5"/>
           <div className="grid grid-cols-3 gap-5  md:grid-cols-4 lg:grid-cols-5">
                <div className="bg-blue-600 mt-5 ml-6 h-[150px] w-[200px]">
                       <BiBookBookmark  className="text-8xl ml-5"/>
                 <p  className="ml-4"> Logic Idea</p>  
                </div>
                <div className="bg-blue-600 mt-5  h-[150px] w-[200px]">
                       <BiBookBookmark  className="text-8xl ml-5"/>
                 <p  className="ml-4"> Logic Idea</p>  
                </div>
                <div className="bg-blue-600 mt-5  h-[150px] w-[200px]">
                       <BiBookBookmark  className="text-8xl ml-5"/>
                 <p  className="ml-4"> Logic Idea</p>  
                </div>
                <div className="bg-blue-600 mt-5  h-[150px] w-[200px]">
                       <BiBookBookmark  className="text-8xl ml-5"/>
                 <p  className="ml-4"> Communications</p>  
                </div>
                <div className="bg-blue-600 mt-5  h-[150px] w-[200px]">
                       <BiBookBookmark  className="text-8xl ml-5"/>
                 <p  className="ml-4"> Science</p>  
                </div>
                <div className="bg-blue-600 mt-5 ml-6 h-[150px] w-[200px]">
                       <BiBookBookmark  className="text-8xl ml-5"/>
                 <p  className="ml-4"> Maths</p>  
                </div>
              
           </div>
        </div>
      
)}


export default WhatLearn