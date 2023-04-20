import React, { useState } from 'react'
import { BsPerson } from "react-icons/bs";



function Dropdownmenu({ options }: { options: string[] }) {

  

  const [isExpanded, setIsExpanded] = useState(false)

  return (
   
   <div>
     <BsPerson size={30}onClick={() => setIsExpanded(true)}  className="items-center"/>
     
     {isExpanded &&
     
     <div className=" rounded border px-2 py-1">
       <ul>
       {options.map(option => (
           <li key={option}>{option}</li>
       ))}
       </ul>
     </div>
     }
   </div>
   
  )
}

export default Dropdownmenu