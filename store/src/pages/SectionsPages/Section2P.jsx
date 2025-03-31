import React from 'react'
import '../SectionsPagesStyles/Section2P.css'
import Header from '../../Components/Header/Header'
import SrcBar2 from '../../Components/SrcBar/SrcBar2';
import Footer from '../../Components/Footer/Footer'
import Provider from '../../context/Provider';
import CartMenu from '../../Components/CartMenu/CartMenu';
const Section2P = () => {
  return (
    <Provider>
    <div className='all_Section2P'>
      <CartMenu/>
     <Header/>
<div className='body_Section2P'>
<div className='filterContent_Section2P'>
 <SrcBar2/>
</div>
<hr />
<Footer/>
</div>
    </div>
    </Provider>
  )
}

export default Section2P