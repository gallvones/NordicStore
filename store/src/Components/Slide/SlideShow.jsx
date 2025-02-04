import React from 'react';
import './SlideShow.css';
//Slide
import { register } from 'swiper/element/bundle';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


register();


const SlideShow = () => {

const imgs = [
  { id: '1', Image: ''},
  { id: '2', Image: ''},
  { id: '3', Image: ''},
]

  return (
    <div className='slide'>
      <hr/>
      <br/>
      <br/>
        <Swiper
        slidesPerView={1}
        pagination={{ clickable: true}}
        navigation
        autoplay={{
          delay: 4000, 
          disableOnInteraction: false,
          
        }}
        >
          <br/><br/>
          {imgs.map( (item) => (
            <SwiperSlide key= {item.id}>
              <img 
                 src= {item.Image}
                 alt= "Slider"
                 className='slide__item'
                 
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default SlideShow