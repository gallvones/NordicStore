import React from 'react'
import '../SectionsPagesStyles/Section1P.css'
import Header from '../../Components/Header/Header'
import SrcBar from '../../Components/SrcBar/SrcBar'
import Footer from '../../Components/Footer/Footer'
const Section1P = () => {
    
  return (
    <div className='all_Section1P'>
     <Header/>
<div className='body_Section1P'>
<div className='filterContent_Section1P'>
<SrcBar/>
</div>
<hr />
<Footer/>
</div>
    </div>
  )
}

export default Section1P