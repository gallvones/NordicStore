import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Profile/Profile.css';
import Logo from '../../Components/img/logo3.png';

const Profile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    cep: '',
    mail: '',
    id:''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  useEffect(() => {
    
    const userDatasString = localStorage.getItem('user');
    if (!userDatasString) {
     
      alert('Dados de usuário não encontrados. Voltando para a página incial');
      navigate('/');
      return;
    }

    const userDatas = JSON.parse(userDatasString);
    

    setFormData({
      name: userDatas.name || '',
      surname: userDatas.surname || '',
      phone: userDatas.phone || '',
      cep: userDatas.cep || '',
      mail: userDatas.email || '', 
      id: userDatas.id || '',
    });

    
  }, [navigate]);

  const backendURL =
    window.location.hostname === 'localhost'
      ? 'http://localhost:3001'
      : 'https://nordic-store.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
const response = await fetch(`${backendURL}/allUsers`);
const users = await response.json();

const user = users.find(u => u._id.toString() === formData.id);
if(!user) {
    const errorId = new Error ('Usuário não encontrado')
    throw errorId;
}

const changingDatas =  fetch(`${backendURL}/updateUser`, {
method:'PUT', 
headers: { 'Content-Type' : 'application/json'},
body: JSON.stringify({
    id: formData.id,         
    name: formData.name,
    surname: formData.surname,
    phone: formData.phone,
    cep: formData.cep,
    email: formData.mail,     
  })
 });
 if(changingDatas){
    console.log('Dados enviados e atualizados com Sucesso! Faça login novamente!')
    alert('Dados atualizados com sucesso! faça login novamente...Redirecionando')
    navigate('/login')
 }

   }catch(error){
   alert('Erro ao atualizar dados', error);
   console.log('Erro', error);
   }
    console.log('Enviando dados ao servidor:', formData);
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit} className="profileForms-container">
        <Link to="/">
          <img src={Logo} alt="logo" className="imgProfile_logo" />
        </Link>
        <h1 className="profile_title">Alterar Perfil</h1>
        <div className="formsLogin_list">
          <input
            type="text"
            name="name"              
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Sobrenome"
            value={formData.surname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Celular"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            value={formData.cep}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="mail"
            placeholder="E-mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submitLogin_button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Profile;
