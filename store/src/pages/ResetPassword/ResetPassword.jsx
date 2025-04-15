import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Components/img/logo3.png';
import '../ResetPassword/ResetPassword.css';
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCodeInput, setShowCodeInput] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowCodeInput(true);
    setError('');
    setSuccess('');
  }
try {
  if(!showCodeInput){
    
  }

}catch{

}

  return (
    <div className='container-reset-password'>
<form onSubmit={handleSubmit} className='form-container-reset-password'>
<Link to='/'><img src={Logo} alt="logo" className='logo-img' /></Link>
<h1 className='title-reset-password'> Alterar Senha</h1>

{error && <div className='error-message-reset-password'>{error}</div>}
{success && <div className='success-message-reset-password'>{success}</div>}

<div className='input-group-reset-password'>
  <input
   type="text" 
   placeholder='Digite sua nova Senha!'
   value={newPassword}
   onChange={(e) => setNewPassword(e.target.value)}
   className='first-input-reset-password'
   required
    />

    <input
     type="text" 
     placeholder='Confirme a Senha!'
     value={confirmPassword}
     onChange={(e) => setConfirmPassword(e.target.value)}
     className='second-input-reset-password'
     />
</div>


<button className='btn-reset-password'> Enviar</button>
</form>
    </div>
  )
}

export default ResetPassword