import React, { useState } from 'react'
import './CardProduct.css'
import propTypes from 'prop-types'
import { BsFillCartPlusFill } from 'react-icons/bs'

const CardProduct = ({data}) => {

  const {title, img, price, img2} = data;

  const [currentImg, setCurrentImg] = useState(img);

  return (
    <section 
      onMouseMove={() => setCurrentImg(img2)}
      onMouseOut={() => setCurrentImg(img)}
    className='Card' >
      <img src= {currentImg} className='card__image'  alt=""></img>
      <div className='card__info'>
      <h1 className='card__title'> {title}</h1>
      <h1 className='card__price'>  {price} </h1>
      </div>
      <button type = 'button' className='add__cart'> <BsFillCartPlusFill/></button>
    </section>
  )
}

export default CardProduct;

CardProduct.propTypes = {
  data: propTypes.shape({}),
}.isRequired;