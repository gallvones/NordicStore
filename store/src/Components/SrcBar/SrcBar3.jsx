import React from 'react'
import '../SrcBar/SrcBar3.css'
import { IoMdSearch } from "react-icons/io";
import EduK from "../../Components/img/anuncioeduK.jpeg";
import Products3 from '../../Components/Products/Products3';

const SrcBar3 = () => {
  return (
    
    <div className='all_srcbar3'>
        <div className='srcbar3_container'>
        <div className='srcbar3_header'>
         <div className='icon3_src'><IoMdSearch/></div>
           <div className='inputsrc3'><input  placeholder='Pesquise a marca'>
           </input>
           </div>
           </div>
           <div className='anuncio3_container'>
             <a href="https://www.google.com.br/?hl=pt-BR" target='blank'><img src={EduK} alt="" className='anuncio3_image' /> </a>
            <a href="https://www.google.com.br/?hl=pt-BR" target='blank'><img src={EduK} alt="" className='anuncio3_image' /> </a>
            <a href="https://www.google.com.br/?hl=pt-BR" target='blank'><img src={EduK} alt="" className='anuncio3_image' /> </a> 
            
          
           </div>
     </div>
           <hr  className='vertical-hr'/>
           <div className='cardproducts3_allcontainer'>
      <Products3/>
        </div>
    </div>
   
  )
}

export default SrcBar3