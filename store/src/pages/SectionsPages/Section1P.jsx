import React from 'react'
import '../SectionsPagesStyles/Section1P.css'
import Header from '../../Components/Header/Header'
import SrcBar from '../../Components/SrcBar/SrcBar'
import Footer from '../../Components/Footer/Footer'
import Provider from '../../context/Provider'
import CartMenu from '../../Components/CartMenu/CartMenu'
const Section1P = () => {
    
  return (
    <Provider>
    <div className='all-Section1P'>
<CartMenu />
     <Header/>
<div className='body_Section1P'>
<div className='filterContent-Section1P'>
<SrcBar/>
</div>
<hr />
<Footer/>
</div>
    </div>
    </Provider>
  )
}

export default Section1P