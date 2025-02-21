import React from 'react'
import './Products3.css'
import CardProduct from '../CardProduct/CardProduct'
import Bermuda from '../img/bermuda.png'
const Products3 = () => {
  return (
    <div className='all__cards3'>
      <div className='cards3_container'>
           <CardProduct data={{title: 'Bermuda cargo high', img: Bermuda, price: 'R$50'}}/>
           <CardProduct data={{title: 'Bermuda cargo high', img: Bermuda, price: 'R$50'}}/>
           <CardProduct data={{title: 'Bermuda cargo high', img: Bermuda, price: 'R$50'}}/>
           </div>
           <div className='cards3_container'>
           <CardProduct data={{title: 'Bermuda cargo high', img: Bermuda, price: 'R$50'}}/>
           <CardProduct data={{title: 'Bermuda cargo high', img: Bermuda, price: 'R$50'}}/>
           <CardProduct data={{title: 'Bermuda cargo high', img: Bermuda, price: 'R$50'}}/>
           </div>
           <div className='buttons3_change'>
<button className='prev_cardProducts3'> Bermudas Anteriores</button>
<button className='next_cardProducts3'> Próximas Bermudas</button>
           
           </div>
           
    </div>
  )
}

export default Products3