import React from 'react'
import './Products.css'
import CardProduct from '../CardProduct/CardProduct'
import B1f from '../../Components/img/b1f.png'
import B1c from '../../Components/img/b1c.png'
const Products = () => {
  return (
    <div className='all__cards'>
      <div className='cards_container'>
           <CardProduct data={{title: 'Camiseta High Listrada', img: B1f, price: 'R$100', img2: B1c}}/>
           <CardProduct data={{title: 'Camiseta High Listrada', img: B1f, price: 'R$100', img2: B1c}}/>
           <CardProduct data={{title: 'Camiseta High Listrada', img: B1f, price: 'R$100', img2: B1c}}/>
           </div>
           <div className='cards_container'>
           <CardProduct data={{title: 'Camiseta High Listrada', img: B1f, price: 'R$100', img2: B1c}}/>
           <CardProduct data={{title: 'Camiseta High Listrada', img: B1f, price: 'R$100', img2: B1c}}/>
           <CardProduct data={{title: 'Camiseta High Listrada', img: B1f, price: 'R$100', img2: B1c}}/>
           </div>
           <div className='buttons_change'>
<button className='prev_cardProducts'> Camisetas Anteriores</button>
<button className='next_cardProducts'> Próximas camisetas</button>
           
           </div>
           
    </div>
  )
}

export default Products