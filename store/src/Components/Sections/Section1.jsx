import React, { useState, useEffect } from 'react'
import Item from '../ItemCarrousel/item'
import '../Sections/Section1.css'
import SectionButton from './SectionButton'
import { Link } from 'react-router-dom'

const backendURL = window.location.hostname === 'localhost'
? 'http://localhost:3001'
: 'https://nordic-store.onrender.com';

const Section1 = () => {
  const [shirts, setShirts] = useState([]);
  const [status, setStatus] = useState('loading') ;

 
  useEffect(() => {
    fetch(`${backendURL}/allshirts`)
      .then(res => {
        if (!res.ok) throw new Error('Falha ao carregar produtos')
        return res.json()
      })
      .then(data => {
        setShirts(data.slice(0, 4))
        setStatus('success')
      })
      .catch(() => setStatus('error'))
  }, [])

  if (status === 'loading') return <div className="loading">Carregando produtos...</div>
  if (status === 'error')
    return (
      <div className="error">
        <p>Não foi possível carregar os produtos.</p>
        <button onClick={() => window.location.reload()}>Tentar novamente</button>
      </div>
    )

  return (
    <div className="all-elements">
      <div className="section1-title">
        <h2>Camisetas Estampadas</h2>
        <p>Destaques</p>
      </div>

      <div className="all-items">
        {shirts.length ? (
          shirts.map(shirt => (
            <Item
              key={shirt._id}
              ItemValues={{
                img: shirt.img1,
                img2: shirt.img2 ?? shirt.img1,
                title: shirt.description,
                price: `${shirt.price}`,
                brand: shirt.brand ?? '',
                size: shirt.size,
              }}
            />
          ))
        ) : (
          <p className="no-items">Nenhum produto disponível</p>
        )}
      </div>

      <div className="btn_container">
        <Link to="/section1">
          <SectionButton />
        </Link>
      </div>
    </div>
  )
}

export default Section1
