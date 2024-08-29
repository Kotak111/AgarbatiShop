import React from 'react';
import "../css/header.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination ,Autoplay} from 'swiper/modules';
function SliderLayout(props) {

   
    return (
        <>
        <h1 className='text-center pro-our'>our products</h1>
        <div data-aos="zoom-in">
        <Swiper
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        slidesPerView={4}
        spaceBetween={40}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints= {{
          300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        
        modules={[Pagination,Autoplay]}
        className="mySwiper"
        
      >
        
        <SwiperSlide><img src="rose.jpg" alt=""  className='swipe-img'/></SwiperSlide>
        <SwiperSlide><img src="kevda.jpg" alt="" className='swipe-img' /></SwiperSlide>
        <SwiperSlide><img src="multi.jpg" alt=""  className='swipe-img'/></SwiperSlide>
        <SwiperSlide><img src="gugal.jpg" alt="" className='swipe-img' /></SwiperSlide>
        <SwiperSlide><img src="pine.jpg" alt=""  className='swipe-img'/></SwiperSlide>
        <SwiperSlide><img src="loban.jpg" alt="" className='swipe-img' /></SwiperSlide>
        <SwiperSlide><img src="dhup1.jpg" alt="" className='swipe-img' /></SwiperSlide>
        <SwiperSlide><img src="cup.jpg" alt=""  className='swipe-img'/></SwiperSlide>
        <SwiperSlide><img src="kapoor.jpg" alt="" className='swipe-img' /></SwiperSlide>
        <SwiperSlide><img src="ds.jpg" alt=""  className='swipe-img'/></SwiperSlide>
      </Swiper>
      </div>
        </>
    );
}

export default SliderLayout;