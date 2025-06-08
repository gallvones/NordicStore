import React from 'react';
import Logo from '../Components/img/logo3.png';
import '../pages/AboutUs.css';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer.jsx'
const AboutUs = () => {
  return (
    <div className='all-about-us-container'>
<div className='header-aboutus-page'>
<Link to='/'><div className='logo-aboutus-page'>
  <img src={Logo} alt="logo" />
</div></Link>

</div>

<hr />
<div className='text-all-container'>
<div className='text1-container-aboutus-page'>
<h2>Quem Somos?</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eius repudiandae dicta iusto labore id nesciunt, adipisci blanditiis facere quos. Accusamus neque commodi illo voluptate iusto. Tempore possimus corrupti eaque.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sed explicabo itaque dolor laborum harum impedit a, sunt commodi, similique quisquam veniam optio eos, ipsum ratione vel dolorem et. Porro.</p>

</div>
</div>
<hr />
<Footer/> 
    </div>
  )
}

export default AboutUs