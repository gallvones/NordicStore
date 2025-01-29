import React from "react";
import Item2 from "../ItemCarrousel/item2";
import '../Sections/Section2.css';
import Tenis from '../img/tenisA.jpeg';
import SectionButton from "./SectionButton";

const Section2 = () => {
    return (
      <div className="all_elements2">
      <div className='all_items2'>
          <Item2 ItemValues={{ img: Tenis, price: 'R$200', title:'  Air Jordan Bege'}} />
          <Item2 ItemValues={{ img: Tenis, price: 'R$200', title:'  Air Jordan Bege'}} />
          <Item2 ItemValues={{ img: Tenis, price: 'R$200', title:'  Air Jordan Bege'}} />
          <Item2 ItemValues={{ img: Tenis, price: 'R$200', title:'  Air Jordan Bege'}} />
          </div>
  <div className="btn_container2">
          <SectionButton link= ""  title= "Tenis"/>
          
      </div>
      </div>
    )}
  
  export default Section2