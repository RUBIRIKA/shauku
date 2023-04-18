import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


function Slider() {
  return (
    <div className="mt-28 px-8">
        <Swiper 
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       
       navigation
     
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}

       breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
                
                
              },

              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

              1024: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

              1280: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

             

       }}
    >
      <SwiperSlide className="slid px">
            <div className="slide-content ">
                <img loading="lazy" src="/images/gori6.jpg" alt="" className=" rounded-md"/>
            </div>
      </SwiperSlide >
           
      <SwiperSlide className="slide ">
            <div className="slide-content">
                <img loading="lazy" src="/images/hotel1.jpg" alt="" className=" rounded-md"/>
            </div>
      </SwiperSlide>


      <SwiperSlide className="slide ">
            <div className="slide-content">
                <img loading="lazy" src="/images/sport1.jpg" alt="" className="rounded-md"/>
            </div>
      </SwiperSlide>

      <SwiperSlide className="slide">
           <div className="slide-content">
                <img loading="lazy" src="/images/volcan1.jpg" alt="" className="rounded-md"/>
            </div>
      </SwiperSlide>

      <SwiperSlide className="slide ">
           <div className="slide-content">
                <img loading="lazy" src="/images/music1.jpg" alt="" className="rounded-md"/>
            </div>
      </SwiperSlide>

      <SwiperSlide className="slide ">
           <div className="slide-content">
                <img loading="lazy" src="/images/hotel2.jpg" alt="" className="rounded-md"/>
            </div>
      </SwiperSlide>
     
    </Swiper>
    </div>
  )
}

export default Slider