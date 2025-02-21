import React from 'react'
import '../SectionsPagesStyles/Section2P.css'
import Header from '../../Components/Header/Header'
import SrcBar2 from '../../Components/SrcBar/SrcBar2';
import Footer from '../../Components/Footer/Footer'
const Section2P = () => {
  return (
    <div className='all_Section2P'>
     <Header/>
<div className='body_Section2P'>
<div className='filterContent_Section2P'>
 <SrcBar2/>
</div>
<hr />
<Footer/>
</div>
    </div>
  )
}

export default Section2P