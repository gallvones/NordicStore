import React from 'react';
import './SlideShow.css';
//Slide

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation} from 'swiper/modules';
import slide_image_1 from "../img/ceci.png"
import slide_image_2 from "../img/b1f.png"
import slide_image_3 from "../img/b2f.png"
import slide_image_4 from "../img/b3f.png"
import slide_image_5 from "../img/b4f.png"
import slide_image_6 from "../img/photo1.jpg"
import slide_image_7 from "../img/ceci.png"


const SlideShow = () => {


  return (
    <div className='container'>
      <h1 className="heading"> Camisetas</h1>
      <br></br><br></br>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" className='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" className='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" className='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" className='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" className='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" className='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" className='slide_image'/>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
}


export default SlideShow