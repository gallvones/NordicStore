import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../Components/img/logo3.png';
import '../ResetPassword/ResetPassword.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const backendURL = window.location.hostname === 'localhost'
  ? 'http://localhost:3001'
  : 'https://nordic-store.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      return setError('As senhas não coincidem. Preencha a mesma senha em ambos os campos!');
    }

    try {
      const response = await fetch(`${backendURL}/resetPassword`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: confirmPassword
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Falha ao verificar email');
      } else {
        setSuccess('Senha alterada com sucesso! Redirecionando para a tela de login...');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='container-reset-password'>
      <form onSubmit={handleSubmit} className='form-container-reset-password'>
        <Link to='/'><img src={Logo} alt="logo" className='logo-img' /></Link>
        <h1 className='title-reset-password'> Alterar Senha</h1>

        {error && <div className='error-message-reset-password'>{error}</div>}
        {success && <div className='success-message-reset-password'>{success}</div>}

        <div className='input-group-reset-password'>
          <div className='first-input-container-reset-password'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Digite sua nova Senha!'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className='first-input-reset-password'
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='show-password-reset-password'
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <div className='second-input-container-reset-password'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Confirme a Senha!'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='second-input-reset-password'
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='show-password-reset-password'
            >
              {showPassword ?  <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <button className='btn-reset-password'> Enviar</button>
      </form>
    </div>
  );
};

export default ResetPassword;
