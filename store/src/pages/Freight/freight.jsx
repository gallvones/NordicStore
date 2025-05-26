import {useState, useEffect} from 'react';

import '../Freight/freight.css'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Components/img/logo3.png';

const Freight = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userDatas = localStorage.getItem('user');
    if(userDatas){
      const user = JSON.parse(userDatas);

      setName(user.name || '');
      setSurname(user.surname || '');
      setMail(user.email || '');
      setPhone(user.phone || '');
      setCep(user.cep || '');

    } else{
      alert('Seu login expirou, retornando para a página de login...')
      navigate('/login')
    }
    

  }, [navigate]);


    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [cep, setCep] =useState('')
    const [complement, setComplement] = useState('')
    const [number, setNumber] = useState('')
    const [correios, setCorreios] = useState(true)
    const [freightValor, setFreightValor] = useState('')
    const [bsbInput, setBsbInput] = useState(false);
    const togglebutton = () =>{
      if (
        name.trim() &&
    surname.trim() &&
    mail.trim() &&
    phone.trim() &&
    cep.trim() &&
    complement.trim() &&
    number.trim()
      )
      setCorreios(false);
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
onChange={(e) => setName(e.target.value)}
required
/>
<input type="text"
placeholder='Sobrenome'
value={surname}
onChange={(e) => setSurname(e.target.value)}
required
/>
</div>
<div className='forms-freight-list2-inputs'>

<input type="text"
  placeholder='E-mail'
  value={mail}
  onChange={(e) => setMail(e.target.value)}
  required
  />

  <input type="text" 
  placeholder='Celular'
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  required
  />

</div>

<div className='forms-freight-list3-inputs'>

<input type="text" 
placeholder='Cep'
value={cep}
onChange={(e) => setCep(e.target.value)}
required
/>

</div>

<div className='forms-freight-list4-inputs'>
<input type="text" 
placeholder=' Complemento'
value={complement}
onChange={(e) => setComplement(e.target.value)}
required
/>
<input type="text" 
placeholder='Número'
value={number}
onChange={(e) => setNumber(e.target.value)}
required
/>

</div>
<div className='calculator-freight'>
  <button type='button' onClick={togglebutton} className='calculator-freight-button'>
  {correios ? (
  <p>Calcular Frete!</p>
) : (
  <p>Calculando...</p>
)}
  </button>
</div>

</form>
{correios ? (
  <p></p>
):  (
<div className='correios-options-container'>
<h1>Escolha uma opção de Envio</h1>
<p> Retirada em Brasília? 
<div class="checkbox-container">
  <label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
    Sim
  </label>
  <label class="custom-checkbox">
    <input type="checkbox" onClick={() => setBsbInput((prev) => !prev)}/>
    <span class="checkmark" ></span>
    Não
  </label>
</div>
  
  </p>
  




</div>
)}
{bsbInput && (
  <>
  <p className='text-buttons-freight'>Mini Envios: <button  className='selected-option'></button></p> 
<p className='text-buttons-freight'>Sedex: <button className='selected-option'></button></p>
<p className='text-buttons-freight'>Pac: <button className='selected-option'></button></p>
</>

)}


</div>

        
    </div>
  )
}

export default Freight;