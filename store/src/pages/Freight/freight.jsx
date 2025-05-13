import {useState} from 'react';
import '../Freight/freight.css'
import { Link } from 'react-router-dom';
import Logo from '../../Components/img/logo3.png';
const Freight = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [cep, setCep] =useState('')
    const [correios, setCorreios] = useState(true)
    const [freightValor, setFreightValor] = useState('')



    const togglebutton = () =>{
      setCorreios(false)
    }


  return (
    <div className='freight-all- container'>
        <div className='forms-freight-container'>
<form action="" className='forms'>
<Link to='/'><img src={Logo} alt="logo" className='imgLogin_logo'/></Link>
<h1 className='freight-title'>Dados para envio</h1>
<div className='forms-freight-list1-inputs'>

<input type="text" 
placeholder='Nome'
value={name}
/>
<input type="text"
placeholder='Sobrenome'
value={surname}
/>
</div>
<div className='forms-freight-list2-inputs'>

<input type="text"
  placeholder='E-mail'
  value={mail}
  />

  <input type="text" 
  placeholder='Celular'
  value={phone}
  />

</div>

<div className='forms-freight-list3-inputs'>

<input type="text" 
placeholder='Cep'
value={cep}
/>

</div>

<div className='forms-freight-list4-inputs'>
<input type="text" 
placeholder=' Complemento'
/>
<input type="text" 
placeholder='Número'
/>

</div>

</form>
<div className='calculator-freight'>
  <button onClick={togglebutton}>
  {correios ? (
  <p>Calcular Frete!</p>
) : (
  <p>Calculando...</p>
)}
  </button>
</div>
<div className='correios-options-container'>
<h1>Escolha uma opção de Envio</h1>
<p>Mini Envios: <button className='selected-option'></button></p> 
<p>Sedex: <button className='selected-option'></button></p>
<p>Pac: <button className='selected-option'></button></p>

</div>

</div>

        
    </div>
  )
}

export default Freight;