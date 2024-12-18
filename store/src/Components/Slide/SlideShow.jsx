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
  { id: '1', Image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ9X_f8yBuGptdg61oQ_EMggsWs9w36fmLVO5nd8aoyvzSgSI6hZ61tZIkSzyiTohJiVkx_4si9ZElYewUR2Xm5ONYjF0dzi4ysfEat5b3DP-LyRD7R8BrhDFKhxzwWDLO4gidyuZa_dQ/s1600/god-of-war.jpg'},
  { id: '2', Image: 'https://psxbrasil.com.br/wp-content/uploads/2020/09/GOW-3-4K.jpg'},
  { id: '3', Image: 'https://psxbrasil.com.br/wp-content/uploads/2020/09/GOW-5-1080-2.jpg'},
]

  return (
    <div className='slide'>
      <br/>
      <br/>
      
        <Swiper
        slidesPerView={1}
        pagination={{ clickable: true}}
        navigation
        >
          <br/>
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