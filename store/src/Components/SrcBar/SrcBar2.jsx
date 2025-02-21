import React from 'react'
import '../SrcBar/SrcBar2.css'
import { IoMdSearch } from "react-icons/io";
import EduK from "../../Components/img/anuncioeduK.jpeg";
import Products2 from '../../Components/Products/Products2';

const SrcBar2 = () => {
  return (
    
    <div className='all_srcbar2'>
        <div className='srcbar2_container'>
        <div className='srcbar2_header'>
         <div className='icon2_src'><IoMdSearch/></div>
           <div className='inputsrc2'><input  placeholder='Pesquise a marca'>
           </input>
           </div>
           </div>
           <div className='anuncio2_container'>
             <a href="https://www.google.com.br/?hl=pt-BR" target='blank'><img src={EduK} alt="" className='anuncio2_image' /> </a>
            <a href="https://www.google.com.br/?hl=pt-BR" target='blank'><img src={EduK} alt="" className='anuncio2_image' /> </a>
            <a href="https://www.google.com.br/?hl=pt-BR" target='blank'><img src={EduK} alt="" className='anuncio2_image' /> </a> 
            
          
           </div>
     </div>
           <hr  className='vertical-hr'/>
           <div className='cardproducts2_allcontainer'>
      <Products2/>
        </div>
    </div>
   
  )
}

export default SrcBar2