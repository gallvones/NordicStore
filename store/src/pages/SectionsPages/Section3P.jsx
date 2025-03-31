import React from 'react'
import '../SectionsPagesStyles/Section3P.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SrcBar3 from '../../Components/SrcBar/SrcBar3'
import Provider from '../../context/Provider'
import CartMenu from '../../Components/CartMenu/CartMenu'
const Section3P = () => {
  return (
    <Provider>
    <div className='all_Section3P'>
      <CartMenu/>
    <Header/>
<div className='body_Section3P'>
<div className='filterContent_Section3P'>
 <SrcBar3/> 
</div>
<hr />
<Footer/>
</div>
   </div>
   </Provider>
  )
}

export default Section3P