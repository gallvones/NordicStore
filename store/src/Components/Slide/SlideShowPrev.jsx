import { useContext } from 'react';
import './SlideShow.css';
import Banner from '../img/banner1.png'
//Slide
import { register } from 'swiper/element/bundle';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AppContext from '../../context/AppContext';


register();


const SlideShowPrev = () => {
const {cartMenu} = useContext(AppContext);

const imgs = [
  { id: '1', Image: `${Banner}`},
  { id: '2', Image: `${Banner}`},
  { id: '3', Image: `${Banner}`},
]

  return (
    <div className={cartMenu ? 'slide-with-cart-open': 'slide' }>
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

export default SlideShowPrev