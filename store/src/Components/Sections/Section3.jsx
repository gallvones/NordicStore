import React from 'react'
import "../Sections/Section3.css";
import Item3 from "../ItemCarrousel/item3";
import SectionButton from "./SectionButton";
import Flu1 from"../img/Fluminense1.jpeg";
import Flu2 from "../img/Fluminense2.jpeg";
import Flu3 from "../img/Fluminense3.jpeg";
import Flu4 from"../img/Fluminense4.jpeg";

const Section3 = () => {
  return (
    <div className="all_elements3">
      <div className='all_items3'>
          <Item3 ItemValues={{ img: Flu1, price: 'R$100', title:'  Tricolor ano x'}} />
          <Item3 ItemValues={{ img: Flu2, price: 'R$200', title:'  Tricolor ano Y'}} />
          <Item3 ItemValues={{ img: Flu3, price: 'R$250', title:'  Tricolor 2012'}} />
          <Item3 ItemValues={{ img: Flu4, price: 'R$200', title:'  Tricolor 2023'}} />
          </div>
  <div className="btn_container2">
          <SectionButton link= ""  title= "Blusas de time"/>
          
      </div>
      </div>
  )
}

export default Section3