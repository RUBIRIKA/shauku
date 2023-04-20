import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { BsPerson } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Dropdownmenu from './Dropdownmenu';
import Drop from './Drop';




function Header() {



    const [isScrolled, setIsScrolled] = useState(false)
    const [nav, setNav] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0){
                setIsScrolled(true)
            }
            else{
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
        window.removeEventListener('scroll', handleScroll)
    }
    })


    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div>
    <header className={`${isScrolled && 'bg-[#03040a]'}`}>
    <div className="flex  z-10 items-center space-x-2 md:space-x-10 ">
        <Link href="/">
        <img src="/images/logo.png" width={100} height={100} className="cursor-pointer object-contain"/>
        </Link>
        <ul className="hidden space-x-4 md:flex ">
            <li className="hlink font-medium">Home</li>
            <li className="hlink font-medium">Products & Services</li>
            <li className="hlink font-medium">Hospitality</li>
            <li className="hlink font-medium">Original Creation</li>
        </ul>


    </div>

    <div className="hidden md:flex grow items-center justify-end">
        <div className="flex gap-3 items-center">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
            <Link href="/registerhome">
            <button className="px-4 py-[6px] rounded-lg font-bold  bg-[#dfac13] mr-2">
                SUBSCRIBE
            </button>
            </Link>
            <BsPerson size={30} />



        </div>
        </div>

        

  {/*Humburger menu*/}


      

   
  <div className="z-10 flex gap-4 md:hidden">

  <SearchIcon className=" h-6 w-6 sm:inline" />
  <div onClick={handleNav} className=" md:hidden  cursor-pointer">

       
       {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/> }
  </div>
  </div>
  


        {/*Mobile side*/}

        <div className={nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300" : "md:hidden fixed top-0 left-[-100%] w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300"}>
       
       
        <ul className="text-center">
            <li className="p-4 text-3xl font-bold"><Link href="/">Home</Link></li>
            <li className="p-4 text-3xl font-bold"><Link href="/">Products & Services</Link></li>
            <li className="p-4 text-3xl font-bold"><Link href="/">Hospitality</Link></li>
            <li className="p-4 text-3xl font-bold"><Link href="/">Original Creation</Link></li>
            <li className="p-4 text-3xl font-bold"><Link href="/registerhome">Account</Link></li>
        </ul>
        </div>
       

       

    </header>
     {/*<div className="">
    <hr className=" line   border-gray-800 sm:mx-auto dark:border-gray-700 mb-10 " />
  </div>*/}


    </div>
  )
}

export default Header