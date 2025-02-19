import React from 'react';
import '../Sections/SectionButton.css';

const SectionButton = ({ title }) => {

  return (
    <div className='all_space'> 
    <div className='link_btn'>
        <button className='btn'> Ver mais {title}</button>
        </div>
    </div>
  )
}

export default SectionButton