import { HiAcademicCap } from "react-icons/hi";
import { Separator } from "@/components/ui/separator"
import { AiTwotonePlayCircle } from 'react-icons/ai';
import { LuBarChart } from 'react-icons/lu';
import { FiAlignRight } from 'react-icons/fi';
import { MdOutlineTimer } from 'react-icons/md';
import { FaRegSadTear } from 'react-icons/fa'; // Corrected import for FaRegSadTear
import Link from "next/link";
import Image from "next/image";


export const PopularCourse=({filteredCourses}:any)=>{
    return(
    
    <div className="flex flex-col items-center lg:mx-[150px] justify-center ">
    <div  className="items-start my-6 justify-start">
        <h1 className="text-3xl font-bold mt-12 items-start justify-start">Popular Courses</h1>
        <Separator />
    </div>
    
    <div className="flex flex-col w-[80%] lg:w-full lg:grid  lg:grid-cols-3 lg:mx-11 gap-5">
  {filteredCourses.map((course: any) => {
    const slug = course.title.toLowerCase().replace(/\s+/g, '-');
    return (
      <div key={course.id} className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="relative">
          <Image
            src={course.image_url}
            alt="Course Thumbnail"
            width={700}
            height={280}
            className="rounded-t-lg"
          />
          <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
               1000ETB
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <AiTwotonePlayCircle className="h-16 w-16 text-white opacity-75" />
          </div>
        </div>
        <div className="p-4">
        <Link href={`/courses/${slug}-${course.id}`}>
            <p className="text-lg text-gray-600 font-bold cursor-pointer">{course.title}</p>
          </Link>
          <p className="text-gray-600 text-xs mt-2 mb-4">A course by: {course.author}</p>
          <p className="text-gray-500 mb-4 text-sm">{course.about}</p>
          <div className="flex border-y pb-5 pt-5 border-gray-900 justify-between items-center text-gray-600 text-sm">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-1">
                <LuBarChart />
                <span className="ml-1">Level</span>
              </div>
              <p className="font-bold">{course.level}</p>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-1">
                <MdOutlineTimer />
                <span className="ml-1">Access Method</span>
              </div>
              <p className="ml-1 font-bold">{course.method}</p>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-1">
                <FiAlignRight />
                <span className="ml-1">Lessons</span>
              </div>
              <p className="ml-1 font-bold">{course.level}</p>
            </div>
          </div>
          <Link href={`/courses/${slug}-${course.id}`}>
            <p className="block w-full mt-4 text-blue-500 border border-blue-600 py-2 px-4 rounded text-center">Get started</p>
          </Link>
        </div>
      </div>
    );
  })}
</div>
</div>
)

}