import React from 'react'
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';
import Phone from '../../Icons/Phone/Phone';
import Mail from '../../Icons/Mail/Mail';
import Whatsapp from '../../Icons/Whatsapp/Whatsapp';
import Instagram from '../../Icons/Instagram/Instagram';
import Youtube from '../../Icons/Youtube/Youtube';
import TikTok from '../../Icons/TikTok/TikTok';
import Copyright from '../../Icons/Copyright/Copyright';


const Footer = () => {
  return (
    <div className='all_footer'>
    <div className='container_footer'>
      <div className='list1_footer'>
        <div> <h2>Sobre</h2></div>
       <Link to="aboutUs" className='link_aboutUs'>
        <div><p>NORDIC STORE</p></div>
        </Link>
        <div> <p>Since 2025</p></div>
        
      </div>

      <div className='list2_footer'>
     <div><h2>Políticas </h2></div>
     <div><p>Política de Frete</p></div>
     <div><p>Política de Cookie</p></div>
     <div><p>Política de Trocas</p></div>
      </div>

      <div className='list3_footer'>
<div><h2>Fale com a gente!</h2></div>
<div><Phone/><p className='list3Phone_footer'>(61) 99983-1708</p></div>
<div><Mail/> <p>contato@nordicstore.com.br</p></div>
<div><Whatsapp/><p>(61) 99983-1708</p></div>
<div><p>Horário de atendimento</p></div>
<div><p>Seg. a sex. das 11hrs às 17hrs</p></div>
      </div>
    
    <div className='list4_footer'>
<div><h2>Siga a Nordic!</h2></div>
  <div className='instaIcon_list4_footer'><Instagram/><p>Instagram</p></div>
  <div className='zapIcon_list4_footer'><Whatsapp/><p>Whatsapp</p></div>
 <div className='youtubeIcon_list4_footer'> <Youtube/><p>Youtube</p></div>
  <div className='tiktokIcon_list4_footer'><TikTok/><p>TikTok</p></div>
    </div>
    </div>
<div className='container_copyright'>
  <h2>Copyright </h2>
  <Copyright/>
  <h2>2025-2027</h2>
  <p>Todos os Direito Reservados</p>
  <p>CNPJ - 00000000000</p>
</div>
    </div>
  )
}

export default Footer