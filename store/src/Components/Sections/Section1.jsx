import React from 'react'
import Item from '../ItemCarrousel/item'
import B1f from '../img/b1f.png';
import B1c from '../img/b1c.png';
import B2f from '../img/b2f.png';
import B2c from '../img/b2c.png';
import B3f from '../img/b3f.png';
import B3c from '../img/b3c.png';
import B4f from '../img/b4f.png';
import B4c from '../img/b4c.png';
import '../Sections/Section1.css';
import SectionButton from './SectionButton';

const Section1 = () => {
  return (
    <div className= 'all_elements'>
    <div className='all_items'>
        <Item ItemValues={{ img: B1f, price: 'R$100', img2: B1c ,title:'  Camiseta High Listrada Azul'}} />
        <Item ItemValues={ { img: B2f, price: 'R$100', img2: B2c, title: ' High Listrada Branca'}}/>
        <Item ItemValues={ { img: B3f, price: 'R$120', img2: B3c, title: 'Disney vs High Rosa'}}/>
        <Item ItemValues={ { img: B4f, price: 'R$120', img2: B4c, title: 'Disvey vs High Cinza'}}/>
       
       

    </div>
    <div className= 'btn_container'>
    <SectionButton link= ""  title= "Camisetas" />
       {/* A minha intencao com a props link, era passar uma outra página. Como deu erro, eu descobri que preciso aprender sobre rotas, primeiramente. Teria alguma forma de utilizar a props para fazer isso? */}
       </div>
    </div>
  )}

export default Section1