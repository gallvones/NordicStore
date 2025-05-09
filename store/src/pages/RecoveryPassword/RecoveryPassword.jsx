import {React, useState} from 'react'
import '../RecoveryPassword/RecoveryPassword.css';
import Logo from '../../Components/img/logo3.png';
import {Link, useNavigate} from 'react-router-dom';

const RecoveryPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const backendURL = window.location.hostname === 'localhost'
  ? 'http://localhost:3001'
  : 'https://nordic-store.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');


    try {
      if (!showCodeInput) {
        // ——— Fase 1: Envio do e‑mail e geração/gravação do código no back ———
        const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
        const response = await fetch(`${backendURL}/send-recovery-code`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            code: generatedCode
          }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Falha ao enviar código de recuperação');
        }
        setSuccess('Um código de 6 dígitos foi enviado para seu e-mail! Verifique o Spam!');
        setShowCodeInput(true);
       

      } else {
        // ——— Fase 2: Verificação do código ———
        const verifyResponse = await fetch(`${backendURL}/verify-recovery-code`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            code: code
          }),
        });
        const verifyData = await verifyResponse.json();

        if (!verifyResponse.ok) {
          throw new Error(verifyData.error || 'Código incorreto ou expirado');
        }

        // Sucesso na verificação: redireciona, passando o token (se for o caso)
        setSuccess('Código correto! Redirecionando para alteração de senha...');
        setTimeout(() => {
          // caso o back retorne um token:
          // navigate('/resetPassword', { state: { email, token: verifyData.token } });
          navigate('/resetPassword', { state: { email } });
        }, 2000);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='recovery-password-container'>
      <form onSubmit={handleSubmit} className='recovery-password-form-container'>
        <Link to='/'><img src={Logo} alt="logo" className='logo-img' /></Link>
        <h1 className='recovery-password-title'>Recuperação de Senha</h1>

        {error && <div className='error-message-recovery-password'>{error}</div>}
        {success && <div className='success-message-recovery-password'>{success}</div>}

        <div className='input-group-recovery-password'>
          <input 
            type="email" 
            placeholder='Digite seu e-mail cadastrado'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading || showCodeInput}
            className='email-input'
          />

          {showCodeInput && (
            <input
              type="text"
              placeholder='Digite o código de 6 dígitos'
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              maxLength={6}
              className='code-input'
            />
          )}
        </div>

        <button 
          type="submit" 
          className='submit-button-recovery-password'
          disabled={isLoading}
        >
          {isLoading
            ? 'Processando...'
            : showCodeInput
              ? 'Verificar Código'
              : 'Enviar Código'
          }
        </button>

        <Link to='/login'>
          <button className='back-to-login'>Página de Login</button>
        </Link>
      </form>
    </div>
  );
};

export default RecoveryPassword;