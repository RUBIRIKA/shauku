import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer' 
import Title from '@/components/Title'
import Products from '@/components/Products'
import Homebody from '@/components/Homebody'
import Slider from '@/components/Slider'
import Slidertwo from '@/components/Slidertwo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
       {/*Header*/}
       <Header />
      <main >
        {/*Banner*/}
        <Slider />
        <Slidertwo />
       {/*<Banner />*/} 
       {/* <Title />*/}
       <Products />
        <section>
        
         
         
        </section>
       
      </main>
       {/*Modal*/}

       <Footer />
    </div>
  )
}
