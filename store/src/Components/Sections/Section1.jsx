import React, { useState, useEffect } from 'react'
import Item from '../ItemCarrousel/item'
import '../Sections/Section1.css';
import SectionButton from './SectionButton';
import { Link } from 'react-router-dom';

const Section1 = () => {
  const [shirts, setShirts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShirts = async () => {
      try {
        console.log('Iniciando requisição para http://localhost:3001/allshirts');
        const response = await fetch('http://localhost:3001/allshirts');
        console.log('Resposta recebida. Status:', response.status);
        
        // Verifica se a resposta é JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const textResponse = await response.text();
          console.error('Resposta não é JSON:', textResponse.substring(0, 100));
          throw new Error(`O servidor retornou um formato inválido: ${response.status}`);
        }

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Erro detalhado do servidor:', errorData);
          throw new Error(errorData.message || 'Erro ao carregar produtos');
        }


        const data = await response.json();
        console.log('Dados recebidos:', data);
        
        // Verificação dos dados recebidos
        if (!Array.isArray(data)) {
          console.error('Dados não são um array:', data);
          throw new Error('Formato de dados inválido');
        }

        const processedShirts = data.slice(0, 4).map(shirt => {
          if (!shirt.img1 || !shirt.description || shirt.price === undefined) {
            console.warn('Item com estrutura incompleta:', shirt);
          }
          return {
            ...shirt,
            // Garante valores padrão para campos obrigatórios
            img1: shirt.img1 || '/placeholder.jpg',
            description: shirt.description || 'Produto sem nome',
            price: shirt.price !== undefined ? shirt.price : 0
          };
        });

        setShirts(processedShirts);
      } catch (err) {
        console.error('Erro completo na requisição:', {
          message: err.message,
          stack: err.stack,
          response: err.response
        });
        setError(`Falha ao carregar produtos: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchShirts();
  }, []);

  if (loading) return <div className="loading">Carregando produtos...</div>;
  
  if (error) return (
    <div className="error">
      <p>{error}</p>
      <button onClick={() => window.location.reload()}>Tentar novamente</button>
    </div>
  );

  return (
    <div className='all-elements'>
<div className='section1-title'> <p> Destaques</p></div>
      <div className='all-items'>
        {shirts.length > 0 ? (
          shirts.map((shirt) => (
            <Item 
              key={shirt._id || Math.random()}
              ItemValues={{ 
                img: shirt.img1, 
                img2: shirt.img2 || shirt.img1, // Fallback para img2
                title: shirt.description, 
                price: `${shirt.price}`,
                brand: shirt.brand || '',
                size: shirt.size
              }} 
            />
          ))
        ) : (
          <p className="no-items">Nenhum produto disponível</p>
        )}
      </div>
      <div className='btn_container'>
        <Link to='/section1'><SectionButton /></Link>
      </div>
    </div>
  );
}

export default Section1;