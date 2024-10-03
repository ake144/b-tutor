import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

  

const NavBar = ()=>{

    return(

        <nav className="flex justify-between w-full items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
            <a href="/" className="pl-8">Logo</a>
            <div className="pr-8 items-center justify-center md:block hidden">
                <a href="/" className="p-4">HOME</a>
                <a href="/about" className="p-4">ABOUT US</a>
                <a href="/courses" className="p-4">COURSES</a>
                <a href="/contact" className="p-4">ADMISSION</a>
                <a href="/contact" className="p-4">CONTACT US</a>
                <a href="/tutors-corner"  className="p-4">TUTOR'S CORNER</a>                
            </div>
            
            <div  className="block md:hidden">  
           <Popover >
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent className="flex flex-col">

                <a href="/" className="p-4">HOME</a>
                <a href="/about" className="p-4">ABOUT US</a>
                <a href="/courses" className="p-4">COURSES</a>
                <a href="/contact" className="p-4">ADMISSION</a>
                <a href="/contact" className="p-4">CONTACT US</a>
                <a href="/tutors-corner"  className="p-4">TUTOR'S CORNER</a>                

                </PopoverContent>
            </Popover>

            </div>

        </nav>



)

}

export default NavBar