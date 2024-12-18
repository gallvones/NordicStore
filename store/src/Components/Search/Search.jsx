import React, {useContext} from 'react';
import { BsSearch} from 'react-icons/bs';
import './Search.css';
import AppContext from '../../context/AppContext';

const Search = () => {
// Utilizei o hook useContext, e passei o AppContext, criado anteriormente como parametro. Tudo que eu escrever dentro das chaves {name, etc, etc} poderá ser utilizado no código, importando seu valor do componente Provider.
  const {name} = useContext(AppContext);

  return (
    <form className='search-bar'>
      {name}
<input type='search' placeholder=' Buscar Produto' className='search_input'/>
<button type='submit' className='search_button'> <BsSearch/></button>
        </form>

  )
}

export default Search