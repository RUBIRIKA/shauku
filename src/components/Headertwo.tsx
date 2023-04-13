import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';
import { useEffect, useState } from 'react'

function Headertwo() {

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
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
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
      <SearchIcon className="hidden h-6 w-6 sm:inline" />
      <NotificationsIcon className="h-6 w-6"/>
      <Link href="/account">
         <img src="/images/avatar.png" alt="" className="cursor-pointer rounded h-12 w-12" />
      </Link>
    </div>

    </header>
  )
}

export default Headertwo