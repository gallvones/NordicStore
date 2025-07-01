import React from 'react';
import Logo from '../img/logo3.png';
import '../ScreenWarning/ScreenWarning.css';
const ScreenWarning = () => {
  return (
    <div className='all-container-warning'>
    <div className='screen-warning'>
        <p> A plataforma não é compatível com a resolução atual da sua tela.</p>
        <p> Enquanto trabalhamos nisso, utilize um dispositivo com uma tela maior.</p>
        <img src={Logo} alt="logo" />
        <h2> Equipe Nordic!</h2>
    </div>
    </div>
  )
}

export default ScreenWarning