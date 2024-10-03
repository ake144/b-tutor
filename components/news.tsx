import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const News = ()=>{
    return(
      <div className=" p-5 m-4">
                
                <div  className="text-3xl font-semibold ">
                    LATEST NEWS
                </div>
                <Separator className="w-[220px] mt-3 mb-5"  />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               <div className="mt-4">
                    <div className="w-[300px] h-[140px]  bg-blue-500">           
                    </div>
                    <h1 className="text-lg my-2  font-semibold">Why You Should Learn Everyday</h1>
                    <p className="my-2 ">April 28,2018    <Separator dir='' className="w-[130px] mt-3"  /> <span> 0 comments</span></p>
                     <Button variant='outline'>
                        READ MORE
                     </Button>
               </div>
               <div className="mt-4">
                    <div className="w-[300px] h-[140px]  bg-blue-500">           
                    </div>
                    <h1 className="text-lg my-2  font-semibold">Why You Should Learn Everyday</h1>
                    <p className="my-2 ">April 28,2018    <Separator dir='' className="w-[130px] mt-3"  /> <span> 0 comments</span></p>
                     <Button variant='outline'>
                        READ MORE
                     </Button>
               </div>
               <div className="mt-4">
                    <div className="w-[300px] h-[140px]  bg-blue-500">           
                    </div>
                    <h1 className="text-lg my-2  font-semibold">Why You Should Learn Everyday</h1>
                    <p className="my-2 ">April 28,2018    <Separator dir='' className="w-[130px] mt-3"  /> <span> 0 comments</span></p>
                     <Button variant='outline'>
                        READ MORE
                     </Button>
               </div>


               </div>
                
      </div>
    )
}

export default News;