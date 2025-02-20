import React from 'react'
import '../SrcBar/SrcBar.css'
import { IoMdSearch } from "react-icons/io";
import EduK from "../../Components/img/anuncioeduK.jpeg";
import Products from '../../Components/Products/Products';

const SrcBar = () => {
  return (
    
    <div className='all_srcbar'>
        <div className='srcbar_container'>
        <div className='srcbar_header'>
         <div className='icon_src'><IoMdSearch/></div>
           <div className='inputsrc'><input  placeholder='Pesquise a marca'>
           </input>
           </div>
           </div>
           <div className='anuncio_container'>
             <a href="https://www.google.com.br/?hl=pt-BR" target='blank'><img src={EduK} alt="" className='anuncio_image' /> </a>
            <a href="https://www.google.com.br/?hl=pt-BR" target='blank'><img src={EduK} alt="" className='anuncio_image' /> </a>
            <a href="https://www.google.com.br/?hl=pt-BR" target='blank'><img src={EduK} alt="" className='anuncio_image' /> </a> 
            
          
           </div>
     </div>
           <hr  className='vertical-hr'/>
           <div className='cardproducts_allcontainer'>
      <Products/>
        </div>
    </div>
   
  )
}

export default SrcBar