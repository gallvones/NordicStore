import { useState, useEffect } from 'react';
import '../Freight/freight.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Components/img/logo3.png';

const Freight = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDatas = localStorage.getItem('user');
    localStorage.removeItem('freightOption');
    if (userDatas) {
      const user = JSON.parse(userDatas);

      setName(user.name || '');
      setSurname(user.surname || '');
      setMail(user.email || '');
      setPhone(user.phone || '');
      setCep(user.cep || '');
    } else {
      alert('Seu login expirou, retornando para a página de login...');
      navigate('/login');
    }
  }, [navigate]);

  const valueOnCart = localStorage.getItem('totalValueCart');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [complement, setComplement] = useState('');
  const [number, setNumber] = useState('');
  const [correios, setCorreios] = useState(true);
  const [shipping1, setShipping1] = useState([]);
  const [shipping2, setShipping2] = useState([]);
  const [shipping3, setShipping3] = useState([]);
  const [freightValor, setFreightValor] = useState(0);
  const [bsbInput, setBsbInput] = useState(null);
  const [checkShiping, setCheckShiping] = useState(null);

  const backendURL =
    window.location.hostname === 'localhost'
      ? 'http://localhost:3001'
      : 'https://nordic-store.onrender.com';

  const togglebutton = () => {
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
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${backendURL}/freightCep`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cepDestiny: cep,
        }),
      });

      const result = await response.json();
      localStorage.setItem('freightOption', JSON.stringify(result));
      const freightData = JSON.parse(localStorage.getItem('freightOption'));

      let cheapestFreights = [];
      if (freightData && Array.isArray(freightData)) {
        // Filtra apenas os fretes que possuem price; os que não têm, são descartados
        const availableFreights = freightData.filter((item) => item.price !== undefined);

        // Encontra as opções desejadas
        cheapestFreights = availableFreights.filter((item) => {
          const shippingName = item.name.toLowerCase();
          return (
            shippingName.includes('loggi') ||
            shippingName.includes('sedex') ||
            shippingName === 'pac'
          );
        });

        if (cheapestFreights.length >= 1) setShipping1(cheapestFreights[0]);
        if (cheapestFreights.length >= 2) setShipping2(cheapestFreights[1]);
        if (cheapestFreights.length >= 3) setShipping3(cheapestFreights[2]);
      }
      console.log(cheapestFreights);
    } catch (error) {
      console.error(error);
    }
  };



  const handlePayment = async () => {
  const valueCartPlusFreight = Number(valueOnCart) + Number(freightValor);
  localStorage.setItem('totalValue', valueCartPlusFreight)
    
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalValue = localStorage.getItem('totalValue');

    try {
      const response = await fetch(`${backendURL}/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems,
          totalValue,
        }),
      });

      if (!response.ok) {
        // Se deu erro, imprime no console e exibe alerta
        const errMsg = await response.json().catch(() => ({}));
        console.error('Erro ao criar ordem:', errMsg);
        alert('Falha ao iniciar pagamento. Tente novamente.');
        return;
      }

      const data = await response.json();
      if (data.init_point) {
        // Redireciona para o checkout do Mercado Pago
        window.location.href = data.init_point;
      } else {
        console.error('Resposta inesperada:', data);
        alert('Não foi possível obter o link de pagamento.');
      }
    } catch (error) {
      console.error('Erro na requisição de pagamento:', error);
      alert('Erro de conexão. Verifique sua internet e tente novamente.');
    }
  };

  return (
    <div className="freight-all- container">
      <div className="forms-freight-container">
        <form action="" className="forms">
          <Link to="/">
            <img src={Logo} alt="logo" className="imgLogin_logo" />
          </Link>
          <h1 className="freight-title">Dados para envio</h1>

          <div className="forms-freight-list1-inputs">
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Sobrenome"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>

          <div className="forms-freight-list2-inputs">
            <input
              type="text"
              placeholder="E-mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Celular"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="forms-freight-list3-inputs">
            <input
              type="text"
              placeholder="Cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              required
            />
          </div>

          <div className="forms-freight-list4-inputs">
            <input
              type="text"
              placeholder="Complemento"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Número"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>

          <div className="calculator-freight">
            <button
              type="button"
              onClick={togglebutton}
              className="calculator-freight-button"
            >
              {correios ? <p onClick={handleSubmit}>Calcular Frete!</p> : <p>Calculando...</p>}
            </button>
          </div>
        </form>

        {correios ? null : (
          <div className="correios-options-container">
            <h1>Escolha uma opção de Envio</h1>
            <p>
              Retirada em Brasília?
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input
                    type="radio"
                    name="retirada"
                    onChange={() => setBsbInput(false)}
                    checked={bsbInput === false}
                  />
                  <span className="checkmark"></span> Sim
                </label>
                <label className="custom-checkbox">
                  <input
                    type="radio"
                    name="retirada"
                    onChange={() => setBsbInput(true)}
                    checked={bsbInput === true}
                  />
                  <span className="checkmark"></span> Não
                </label>
              </div>
            </p>
          </div>
        )}

        {bsbInput === true && (
          <>
            <p className="text-buttons-freight1">
              {`${shipping1.name} || R$: ${shipping1.price} `}
              <input
                type="radio"
                name="frete"
                value={shipping1.price}
                onChange={() => {
                  setFreightValor(shipping1.price);
                  setCheckShiping(true);

                }}
              />
            </p>

            <p className="text-buttons-freight2">
              {`${shipping2.name} || R$: ${shipping2.price} `}
              <input
                type="radio"
                name="frete"
                value={shipping2.price}
                onChange={() => {
                  setFreightValor(shipping2.price);
                  setCheckShiping(true);
                }}
              />
            </p>

            <p className="text-buttons-freight3">
              {`${shipping3.name} || R$: ${shipping3.price} `}
              <input
                type="radio"
                name="frete"
                value={shipping3.price}
                onChange={() => {
                  setFreightValor(shipping3.price);
                  setCheckShiping(true);
                }}
              />
            </p>
          </>
        )}

        {bsbInput === false && (
          <p className="pickup-message">
            Após o pagamento ser aprovado, entraremos em contato!
          </p>
        )}

        <div>
          <p className="total-value">
            Valor Total:{' '}
            {`R$ ${
              bsbInput === true
                ? Number(valueOnCart) + Number(freightValor)
                : Number(valueOnCart)
            }
            `.trim()}
          </p>

          { (bsbInput === false || (bsbInput === true && checkShiping !== null)) && (
            <button
              className="payment-button"
              onClick={() =>  {
                handlePayment();
              }}
            >
              <p>Prosseguir para o Pagamento</p>
            </button>
          ) }
        </div>
      </div>
    </div>
  );
};

export default Freight;
