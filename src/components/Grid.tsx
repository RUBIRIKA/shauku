import Link from "next/link"
import Image from 'next/legacy/image';

function Grid() {
  return (
    <div className=" mt-12 px-8 pb-10 mx-auto mb-10 gap-2 columns-4 space-y-2 md:space-y-3 md:gap-3 lg:space-y-3 lg:gap-3 xl:space-y-5  xl:gap-5 2xl:space-y-5  2xl:gap-5  ">
        
          
           <img src="/images/b2.jpg" className="cursor-pointer rounded " alt="" />
        
    
           <img src="/images/b1.jpg" className="cursor-pointer rounded " alt="" />
        
            <img src="/images/b4.jpg" className="cursor-pointer rounded " alt="" />
        
            <img src="/images/b5.jpg" className="cursor-pointer rounded " alt="" />
      
            <img src="/images/b6.jpg" className="cursor-pointer rounded " alt="" />
     
             <img src="/images/pk.jpg" className="cursor-pointer rounded " alt="" />
  
            <img src="/images/b3.jpg" className="cursor-pointer rounded " alt="" />
   
            <img src="/images/b8.jpg" className="cursor-pointer rounded " alt="" />

            <img src="/images/b1.jpg" className="cursor-pointer rounded " alt="" />
            
            <img src="/images/b2.jpg" className="cursor-pointer rounded " alt="" />
        
    </div>
  )
}

export default Grid