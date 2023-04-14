import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"




function Banner() {
  return (
    <section className="">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}>

            <div>
                <img loading="lazy" src="/images/music.jpg" alt=""/>
            </div>
            <div>
                <img loading="lazy" src="/images/hotel.jpg" alt=""/>
            </div>
            <div>
                <img loading="lazy" src="/images/mtn.jpg" alt=""/>
            </div>
            <div>
                <img loading="lazy" src="/images/animals.jpg" alt=""/>
            </div>

          </Carousel>



       
    </section>
  )
}

export default Banner