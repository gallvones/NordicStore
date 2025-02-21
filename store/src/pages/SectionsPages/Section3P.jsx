import React from 'react'
import '../SectionsPagesStyles/Section3P.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SrcBar3 from '../../Components/SrcBar/SrcBar3'
const Section3P = () => {
  return (
    <div className='all_Section3P'>
    <Header/>
<div className='body_Section3P'>
<div className='filterContent_Section3P'>
 <SrcBar3/> 
</div>
<hr />
<Footer/>
</div>
   </div>
  )
}

export default Section3P