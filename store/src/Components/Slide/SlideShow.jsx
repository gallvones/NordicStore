import { useContext } from 'react';
import './SlideShow.css';
import Banner from '../img/banner1.png'
import 'swiper/css';
import AppContext from '../../context/AppContext';

const SlideShow = () => {
const {cartMenu} = useContext(AppContext);

  return (
    <div className={cartMenu ? 'slide-with-cart-open': 'slide' }>
      <div className='image-container'>
        <img src={Banner} alt="Banner de exemplo" className='banner-img'/>

      </div>
        
    </div>
  )
}

export default SlideShow