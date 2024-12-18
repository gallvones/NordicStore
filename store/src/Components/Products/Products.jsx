import React from 'react'
import './Products.css'
import CardProduct from '../CardProduct/CardProduct'
const Products = () => {
  return (
    <div className='all__cards'>
        <CardProduct data={{title: 'Camiseta High', img: 'https://estaçãodosbones.com/wp-content/uploads/2023/03/01ffdc44-1ca5-44c3-ab58-cbc0aa11ed1c.jpg', price: 'R$80', img2: 'https://m.media-amazon.com/images/I/813kqvYoRfL.png'}} />

        <CardProduct data={{ title: 'Camiseta Blunt', img: 'https://images.tcdn.com.br/img/img_prod/703344/camiseta_blunt_basica_inkwood_preto_200595_8595_1_26089cbe2bbfe7033c01633665b1a2b1.jpg', price: 'R$80', img2: 'https://m.media-amazon.com/images/I/813kqvYoRfL.png'}}/>

       <CardProduct data={{title:'Camiseta  Nike ', img:'https://acdn.mitiendanube.com/stores/002/201/480/products/img_0614-3978e3dae03b53a0bf17221781744017-1024-1024.jpg', price: 'R$100', img2: 'https://m.media-amazon.com/images/I/813kqvYoRfL.png'}}/>
        
        <CardProduct data={{}}/>
        <CardProduct data={{}}/>
        <CardProduct data={{}}/>
    </div>
  )
}

export default Products