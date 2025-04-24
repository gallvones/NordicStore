import React , {useState, useEffect} from "react";
import Item2 from "../ItemCarrousel/item2";
import '../Sections/Section2.css';
import SectionButton from "./SectionButton";
import { Link } from "react-router-dom";

const Section2 = () => {
  const [tennis, setTennis] = useState([])
  const [status, setStatus] = useState('loading') 

  useEffect(() => {
    fetch('http://localhost:3001/alltennis')
      .then(res => {
        if (!res.ok) throw new Error('Falha ao carregar produtos')
        return res.json()
      })
      .then(data => {
        setTennis(data.slice(0, 4))
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
    <div className="all-elements2">
      <div className="section1-title2">
        <h2>Tênis </h2>
        <p>Destaques</p>
      </div>

      <div className="all-items2">
        {tennis.length ? (
          tennis.map(tennis => (
            <Item2
              key={tennis._id}
              ItemValues={{
                img: tennis.img1,
                img2: tennis.img2 ?? tennis.img1,
                title: tennis.description,
                price: `${tennis.price}`,
                brand: tennis.brand ?? '',
                size: tennis.size,
              }}
            />
          ))
        ) : (
          <p className="no-items">Nenhum produto disponível</p>
        )}
      </div>

      <div className="btn_container2">
        <Link to="/section2">
          <SectionButton />
        </Link>
      </div>
    </div>
  )
}

export default Section2
