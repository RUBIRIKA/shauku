import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


function Slidertwo() {
  return (
    <div className="mt-12 px-8">
        <Swiper 
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       
       navigation
    
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}

       breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
                
                
              },

              480: {
                slidesPerView: 3,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 4,
                spaceBetween: 15,
              },

              1024: {
                slidesPerView: 5,
                spaceBetween: 15,
              },

              1280: {
                slidesPerView: 6,
                spaceBetween: 15,
              },

             

       }}
    >
      <SwiperSlide className="slid px">
            <div className="slide-content ">
                <img loading="lazy" src="/images/attract.jpg" alt="" className=" rounded-lg"/>
            </div>
      </SwiperSlide >
           
      <SwiperSlide className="slide ">
            <div className="slide-content">
                <img loading="lazy" src="/images/fiction.jpg" alt="" className=" rounded-lg"/>
            </div>
      </SwiperSlide>


      <SwiperSlide className="slide ">
            <div className="slide-content">
                <img loading="lazy" src="/images/food.jpg" alt="" className="rounded-lg"/>
            </div>
      </SwiperSlide>

      <SwiperSlide className="slide">
           <div className="slide-content">
                <img loading="lazy" src="/images/music3.jpg" alt="" className="rounded-lg"/>
            </div>
      </SwiperSlide>

      <SwiperSlide className="slide ">
           <div className="slide-content">
                <img loading="lazy" src="/images/pod.jpg" alt="" className="rounded-lg"/>
            </div>
      </SwiperSlide>

      <SwiperSlide className="slide ">
           <div className="slide-content">
                <img loading="lazy" src="/images/travel1.jpg" alt="" className="rounded-lg"/>
            </div>
      </SwiperSlide>

      <SwiperSlide className="slide ">
           <div className="slide-content">
                <img loading="lazy" src="/images/sh1.jpg" alt="" className="rounded-lg"/>
            </div>
      </SwiperSlide>

      <SwiperSlide className="slide ">
           <div className="slide-content">
                <img loading="lazy" src="/images/sh1.jpg" alt="" className="rounded-lg"/>
            </div>
      </SwiperSlide>

      <SwiperSlide className="slide ">
           <div className="slide-content">
                <img loading="lazy" src="/images/sh1.jpg" alt="" className="rounded-lg"/>
            </div>
      </SwiperSlide>

    

      
     
    </Swiper>
    </div>
  )
}

export default Slidertwo