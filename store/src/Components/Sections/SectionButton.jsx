import React from 'react';
import '../Sections/SectionButton.css';

const SectionButton = ({ link, title }) => {

  return (
    <div className='all_space'> 
    <a href={link} className='link_btn'>
        <button className='btn'> Ver mais {title}</button>
        </a>
    </div>
  )
}

export default SectionButton