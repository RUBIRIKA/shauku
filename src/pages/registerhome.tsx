import Footer from "@/components/Footer"
import Grid from "@/components/Grid"
import Header2 from "@/components/Header2"
import Title from "@/components/Title"


function registerhome() {
  return (
    <div>
    <main className=" h-full w-full bg-[url('/images/shauku1.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
       <div className="bg-black  w-full h-full lg:bg-opacity-90">
         <div><Header2 /></div>
          <div className="flex mt-10 justify-center"><Title /></div>
          <div><div className=" mt-12 px-8 pb-10 mx-auto mb-10 gap-2 columns-2 md:columns-3 lg:columns-4 xl:columns-4 space-y-2 md:space-y-3 md:gap-3 lg:space-y-3 lg:gap-3 xl:space-y-5  xl:gap-5 2xl:space-y-5  2xl:gap-5  ">
        
          
        <img src="/images/b2.jpg" className="cursor-pointer rounded bg-black bg-opacity-90" alt="" />
     
 
        <img src="/images/b1.jpg" className="cursor-pointer rounded " alt="" />
     
         
         <img src="/images/b3.jpg" className="cursor-pointer rounded " alt="" />

         <img src="/images/b8.jpg" className="cursor-pointer rounded " alt="" />

         <img src="/images/b1.jpg" className="cursor-pointer rounded " alt="" />
         
         <img src="/images/b2.jpg" className="cursor-pointer rounded " alt="" />
         
         <img src="/images/b2.jpg" className="cursor-pointer rounded " alt="" />
     
 
     <img src="/images/b1.jpg" className="cursor-pointer rounded " alt="" />
     
 </div></div>
          <div><Footer/></div>
       </div>
    </main>
    </div>
  )
}

export default registerhome