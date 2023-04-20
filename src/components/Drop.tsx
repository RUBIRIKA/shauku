import React, { useState } from 'react'
import { BsPerson } from "react-icons/bs";



function Drop() {

    const Menu = [
        {
            title:"Sign-In",
            
        },
        {
            title:"Kurikira",
            
        },
        {
            title:"woow",
            
        },
        {
            title:"",
            
        },
    ];

  const [isExpanded, setIsExpanded] = useState(false)

  return (

    <div className="">

<BsPerson size={30} onClick={() => setIsExpanded(true)}  className="items-center"/>
     
     {isExpanded &&
   
   <div className=" rounded border px-2 py-1">

     <ul>
        {  Menu?.map((menu,i) => (
        
       
          
            <li key={i}>{menu.title}  </li>
         
        
        
      
       
        
           )

         )}
        </ul> 
        
   </div>
}
   </div>
   
  )
}

export default Drop