import React from 'react'
import './Products2.css'
import CardProduct from '../CardProduct/CardProduct'
import Tenis from '../img/tenisA.jpeg';
const Products2 = () => {
  return (
    <div className='all__cards2'>
      <div className='cards2_container'>
           <CardProduct data={{title: 'Air Jordan Nike Branco', img: Tenis, price: 'R$250'}}/>
           <CardProduct data={{title: 'Air Jordan Nike Branco', img: Tenis, price: 'R$250'}}/>
           <CardProduct data={{title: 'Air Jordan Nike Branco', img: Tenis, price: 'R$250'}}/>
           </div>
           <div className='cards2_container'>
           <CardProduct data={{title: 'Air Jordan Nike Branco', img: Tenis, price: 'R$250'}}/>
           <CardProduct data={{title: 'Air Jordan Nike Branco', img: Tenis, price: 'R$250'}}/>
           <CardProduct data={{title: 'Air Jordan Nike Branco', img: Tenis, price: 'R$250'}}/>
           </div>
           <div className='buttons2_change'>
<button className='prev_cardProducts2'> Tenis Anteriores</button>
<button className='next_cardProducts2'> Próximos Tenis</button>
           
           </div>
           
    </div>
  )
}

export default Products2