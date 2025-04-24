import React, {useState, useEffect} from 'react';
import "../Sections/Section3.css";
import Item3 from "../ItemCarrousel/item3";
import SectionButton from "./SectionButton";
import { Link } from 'react-router-dom';

const Section2 = () => {
  const [smoothShirts, setSmoothShirts] = useState([])
  const [status, setStatus] = useState('loading') 

  useEffect(() => {
    fetch('http://localhost:3001/allsmoothshirts')
      .then(res => {
        if (!res.ok) throw new Error('Falha ao carregar produtos')
        return res.json()
      })
      .then(data => {
        setSmoothShirts(data.slice(0, 4))
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
    <div className="all-elements3">
      <div className="section1-title3">
        <h2>Camisetas Lisas</h2>
        <p>Destaques</p>
      </div>

      <div className="all-items3">
        {smoothShirts.length ? (
          smoothShirts.map(smoothShirt => (
            <Item3
              key={smoothShirt._id}
              ItemValues={{
                img: smoothShirt.img1,
                img2: smoothShirt.img2 ?? smoothShirt.img1,
                title: smoothShirt.description,
                price: `${smoothShirt.price}`,
                brand: smoothShirt.brand ?? '',
                size: smoothShirt.size,
              }}
            />
          ))
        ) : (
          <p className="no-items">Nenhum produto disponível</p>
        )}
      </div>

      <div className="btn_container3">
        <Link to="/section2">
          <SectionButton />
        </Link>
      </div>
    </div>
  )
}

export default Section2
