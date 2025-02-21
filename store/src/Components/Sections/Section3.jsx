import React from 'react'
import "../Sections/Section3.css";
import Item3 from "../ItemCarrousel/item3";
import SectionButton from "./SectionButton";
import Bermuda from "../img/bermuda.png"
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <div className="all_elements3">
      <div className='all_items3'>
          <Item3 ItemValues={{ img: Bermuda, price: 'R$50', title:'  Bermuda Cargo High'}} />
          <Item3 ItemValues={{ img: Bermuda, price: 'R$50', title:'  Bermuda Cargo High'}} />
          <Item3 ItemValues={{ img: Bermuda, price: 'R$50', title:'  Bermuda Cargo High'}} />
          <Item3 ItemValues={{ img: Bermuda, price: 'R$50', title:'  Bermuda Cargo High'}} />
          </div>
  <div className="btn_container2">
          <Link to='section3'><SectionButton/></Link>
          
      </div>
      </div>
  )
}

export default Section3