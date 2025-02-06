import React, {useState} from 'react'
import Logo from '../Components/img/logo3.png';
import '../pages/RegisterAccount.css';
import { Link, useNavigate } from 'react-router-dom';

const RegisterAccount = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    cep: '',
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

 

    try {
      const response = await fetch('http://localhost:3001/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Usuário cadastrado com sucesso! Redirecionando para a página de login...' ) ;
        navigate('/login');
        
      } 
      
      else {
        alert('Este login ja está sendo utilizado!');
        
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };


  return (
    <div className='registerAccount_container'>
      <form onSubmit={handleSubmit} className='registerForms_container'>
        <Link to='/'><img src={Logo} alt="logo" className='img_logo' /></Link>
        <h1 className='register_title'>Cadastre-se</h1>
        <div className='forms_list'>
          <input type="text" placeholder='Digite seu Nome' name='nome' value={formData.nome} onChange={handleChange} required />
          <input type="text" placeholder='Digite seu Sobrenome' name='sobrenome' value={formData.sobrenome} onChange={handleChange} required />
          <input type="tel" placeholder='Telefone com DDD' name='telefone' value={formData.telefone} onChange={handleChange} required />
          <input type="text" placeholder='Cep' name='cep' value={formData.cep} onChange={handleChange} required />
          <input type="email" placeholder='E-mail' name='email' value={formData.email} onChange={handleChange} required />
          <input type="password" placeholder='Senha' name='senha' value={formData.senha} onChange={handleChange} required />
        </div>
        <button type="submit" className='submit_button' >Enviar</button>
      </form>
    </div>
  )
}

export default RegisterAccount