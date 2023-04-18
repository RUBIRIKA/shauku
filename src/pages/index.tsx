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
import Homecards from '@/components/Homecards'
import Header2 from '@/components/Header2'
import Grid from '@/components/Grid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
       {/*Header*/}
       <Header />
        {/* <Header2 />*/} 
      
      <main >
        {/*Banner*/}
        <Slider />
        <Slidertwo />
        <Grid />
       
       {/*<Banner />*/} 
       {/* <Title />*/}
    
        <section>
        
         
         
        </section>
        <Footer />
      </main>
       {/*Modal*/}

      
    </div>
  )
}
