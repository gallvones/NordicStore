import React, { useState } from 'react'
import propTypes from 'prop-types';
import AppContext from './AppContext';
// Utilizei o conceito de uma destruturação da props, para conseguir puxar informaçnoes dos filhos. 
const Provider = ({ children }) => {
    const [name,setName] = useState('Manual do Dev');

    const value = {
    name,
    setName
    };

  return (
    // AppContext.Provider - o provider é uma forma de passar informação. Sinalizei para o react
    // que este componente é o que provê dados. 
    // Todos os componentes filhos do componente Provider, foram englobados no contexto por meio do {children abiaxo};
    <AppContext.Provider value={value}>
     {children} 
    </AppContext.Provider>
  )
}
// Por fim, todos os componentes filhos do meu componente Provider, terão acesso às informações/ dados do componente Provider;
export default Provider

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;