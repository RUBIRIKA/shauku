import Image from 'next/image'
import { Inter } from 'next/font/google'

import Headertwo from '@/components/Headertwo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
       {/*Header*/}
       <Headertwo />
      <main>
        {/*Banner*/}
        <section>

        </section>
      </main>
       {/*Modal*/}
    </div>
  )
}
