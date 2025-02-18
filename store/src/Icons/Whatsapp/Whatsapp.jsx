import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import './Whatsapp.css'


const Whatsapp = () => {
 
    const zapNumber = '5561999831708'
  return (
    <div className='zap-icon'>
        <a href={`https://wa.me/${zapNumber}`} target='blank'><FaWhatsapp/></a>
    </div>
  )
}

export default Whatsapp