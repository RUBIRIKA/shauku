import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';
import { useEffect, useState } from 'react'

function Header() {

    const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <div>
    <header className={`${isScrolled && 'bg-[#03040a]'}`}>
    <div className="flex items-center space-x-2 md:space-x-10 ">
        <img src="/images/logo.png" width={100} height={100} className="cursor-pointer object-contain"/>
        <ul className="hidden space-x-4 md:flex ">
            <li className="hlink font-medium">Home</li>
            <li className="hlink font-medium">Products & Services</li>
            <li className="hlink font-medium">Hospitality</li>
            <li className="hlink font-medium">Original Creation</li>
        </ul>
    </div>

    <div className="flex items-center space-x-4 text-sm font-light">
     <button className="ml-auto border px-4 py-1.5 rounded-lg font-medium tracking-wide hover:bg-[#dfac13]">Sign-In</button>
    </div>

    

    </header>
     <div className="">
    <hr className=" line   border-gray-800 sm:mx-auto dark:border-gray-700 mb-10 " />
    </div>
    </div>
  )
}

export default Header