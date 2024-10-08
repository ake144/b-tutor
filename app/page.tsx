'use client'

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HiAcademicCap } from "react-icons/hi";
import { Separator } from "@/components/ui/separator"
import { AiTwotonePlayCircle } from 'react-icons/ai';
import { LuBarChart } from 'react-icons/lu';
import { FiAlignRight } from 'react-icons/fi';
import { MdOutlineTimer } from 'react-icons/md';
import { FaRegSadTear } from 'react-icons/fa'; // Corrected import for FaRegSadTear
import Link from "next/link";
import { PopularCourse } from "@/components/popular";
import ACHIEVEMENTS from "@/components/achievement";
import WhatLearn from "@/components/learn";
import News from "@/components/news";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import TeamMembers from "@/components/team";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Testimonials from "@/components/testimonials";
import { FAQ } from "@/components/faq";


export default function Home() {
 const filteredCourses = [
  {
    id:1,
    title:'General physics',
    image:'',
    level:3,
    method:'online',
    content:'introduction to advanced concepts about general physics, all you need to know',
   author:'gedi'
  },
  {
    id:1,
    title:'General Biology',
    image:'',
    level:3,
    method:'online',
    content:'introduction to advanced concepts about general physics, all you need to know',
   author:'gedi'
  },
  {
    id:1,
    title:'General Biology',
    image:'',
    level:3,
    method:'online',
    content:'introduction to advanced concepts about general physics, all you need to know',
   author:'gedi'
  },
  {
    id:1,
    title:'General Biology',
    image:'',
    level:3,
    method:'online',
    content:'introduction to advanced concepts about general physics, all you need to know',
   author:'gedi'
  },
 ]


 const images = [
      {
        src: '/learn.jpg',
        alt: 'Image 1',
      },
      {
        src: '/lead.jpg',
        alt: 'Image 2',
      },
      {
        src: '/bright.jpg',
        alt: 'Image 3',
      },
      {
        src: '/tutor.jpg',
        alt: 'Image 4',
      },

 ]


 const [currentIndex, setCurrentIndex] = useState(0);



 const handleNext = () => {
   setCurrentIndex((prevIndex) =>
     prevIndex === images.length - 1 ? 0 : prevIndex + 1
   );
 };

 const handlePrevious = () => {
   setCurrentIndex((prevIndex) =>
     prevIndex === 0 ? images.length - 1 : prevIndex - 1
   );
 };


  return (
    <div className="w-full h-auto">
      <div className="px-4 md:px-12 py-8">
        {/* Carousel Section */}
           <div className="bg-[url('/learn.jpg')] ">


           </div>


           <div>
           <Carousel className="relative mb-8 w-full">
           <CarouselContent>
             {images.map((image, index) => (
            <CarouselItem key={index} hidden={index !== currentIndex}>
              <div className="relative w-full h-[500px] md:h-[800px] lg:h-[900px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Previous Button */}
        <button
          className="absolute left-2 top-1/2 text-white transform -translate-y-1/2  text-5xl font-bold  p-7 rounded-full   transition"
          onClick={handlePrevious}
        >
          <GoChevronLeft />
        </button>

        {/* Custom Next Button */}
        <button
          className="absolute right-2 text-white top-1/2 transform -translate-y-1/2 text-5xl font-bold p-7 rounded-full  transition"
          onClick={handleNext}
        >
          <GoChevronRight />
        </button>
      </Carousel>

           </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-[150px]  lg:grid-cols-3 gap-6 mt-12">
          <div className="rounded-lg bg-orange-500 shadow-md p-6 flex flex-row items-center">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">Best Home Teacher</h2>
              <p>Guidance for all subjects from KG to college</p>
            </div>
            <HiAcademicCap className="text-5xl text-white" />
          </div>

          <div className="rounded-lg bg-blue-600 shadow-md p-6 flex flex-row items-center">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">Expert Tutors</h2>
              <p>Specialized tutors for high school and university subjects</p>
            </div>
            <HiAcademicCap className="text-5xl text-white" />
          </div>

          <div className="rounded-lg bg-green-600 shadow-md p-6 flex flex-row items-center">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">Personalized Learning</h2>
              <p>Custom learning plans for every student</p>
            </div>
            <HiAcademicCap className="text-5xl text-white" />
          </div>
        </div>



                 <div className="mt-14  lg:mx-[350px] items-center justify-center flex  p-2">

                       <Button variant='secondary'  className="bg-blue-600 text-white hover:text-white hover:bg-blue-600 hover:text-xl">
                               Join Us
                       </Button>
                     
                 </div>

         {/*  popular courses section */}

           <PopularCourse  filteredCourses={filteredCourses}/>
           
           <div>
           <ACHIEVEMENTS  />
           </div>
           <div>
            < WhatLearn  />
           </div>

           <div>
            <TeamMembers  />
           <div>
            <News />
           </div>


           <div>
            <Testimonials />
           </div>
           <div>

             <FAQ />
           </div>

           
      </div>
    </div>
  </div>
  );
}
