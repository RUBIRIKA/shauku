import Image from "next/image"
import Link from "next/link"
import { BsPerson } from "react-icons/bs";


function Header2() {
  return (
    <div className="fixed top-0 h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] lg:px-10 lg:py-4 z-10">
      {/*left side*/}
      <div className="flex grow items-center justify-start">
       <Link href="/">
            <div className="flex ">
                <Image src="/images/logo.png" alt="/" width="100" height="100" className="cursor-pointer z-10" />
            </div>
       </Link>
      </div>
      {/*middle*/}

      {/*right side*/}
      <div className="flex grow items-center justify-end">
        <div className="flex items-center">
            <Link href="/login">
            <button className="px-4 py-[6px] rounded-lg font-bold  bg-[#dfac13] mr-2 ">
                Sign-In
            </button>
            </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Header2