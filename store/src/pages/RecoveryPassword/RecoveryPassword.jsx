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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!showCodeInput) {
        // Fase 1: Verificação do e-mail e envio do código
        const response = await fetch('http://localhost:3001/send-recovery-code', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            code: Math.floor(100000 + Math.random() * 900000).toString()
          }),
        });

        const data = await response.json();
        if(response.ok){
            setSuccess('Um código de 6 dígitos foi enviado para seu e-mail! Verifique o Spam!');
        }
        if (!response.ok) {
          throw new Error(data.message || 'Falha ao enviar código de recuperação');
        }

        setShowCodeInput(true);
      } if(showCodeInput === true){
  // Fase 2:  Amazenamento do código no Banco de dados
  const codeTimer = Date.now() + 5 * 60 * 1000; // 5 minutos
  const verifyResponse = await fetch('http://localhost:3001/insert-recovery-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      code: code,
      codeTimer: codeTimer
    }),
  });

  const verifyData = await verifyResponse.json();

  if (!verifyResponse.ok) {
    throw new Error(verifyData.message || 'Código não enviado. Tente novamente.');
  }}
      else {
      // Aqui eu vou inserir a verificacao do código preenchido e redirecionar o usuário para pagina de mudar senha, pelo naviagete

        // Redireciona para tela de nova senha
        //navigate('/resetPassword', { state: { email, token: verifyData.token } });
      }
    } catch (error) {
      setError(error.message);
      setSuccess('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='recovery-password-container'>
      <form onSubmit={handleSubmit} className='recovery-password-form-container'>
        <Link to='/'><img src={Logo} alt="logo" className='logo-img' /></Link>
        <h1 className='recovery-password-title'>Recuperação de Senha</h1>

        {error && <div className='error-message'>{error}</div>}
        {success && <div className='success-message'>{success}</div>}

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
          {isLoading ? (
            'Processando...'
          ) : showCodeInput ? (
            'Verificar Código'
          ) : (
            'Enviar Código'
          )
          }
        </button>

        <Link to='/login'>
            <button className='back-to-login'> Página de Login</button>
        </Link>
      </form>
    </div>
  );
};

export default RecoveryPassword;