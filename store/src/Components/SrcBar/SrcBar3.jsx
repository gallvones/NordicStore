import React, { useState, useEffect } from 'react'
import '../SrcBar/SrcBar3.css'
import Item from '../ItemCarrousel/item';
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const backendURL = window.location.hostname === 'localhost'
? 'http://localhost:3001'
: 'https://nordic-store.onrender.com';

const SrcBar = () => {
  const [allShirts, setAllShirts] = useState([]);
  const [shirts,setShirts] = useState([]);
  const [status, setStatus] = useState('loading') ;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`${backendURL}/allsmoothshirts`)
      .then(res => {
        if (!res.ok) throw new Error('Falha ao carregar produtos')
        return res.json()
      })
      .then(data => {
        setAllShirts(data);
        setShirts(data.slice(0,4));
        setStatus('success')
      })
      .catch(() => setStatus('error'))
  }, [])
  const changingProducts = () => {
    
  setShirts(allShirts.slice(4, 8));
  }

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Se o campo estiver vazio, volta a exibir apenas os 4 primeiros
    if (term.trim() === '') {
      setShirts(allShirts.slice(0, 4));
      return;
    }

    // Filtra todos os itens cujo "brand" contenha o texto digitado (case-insensitive)
    const filtered = allShirts.filter((shirt) =>
      shirt.brand?.toLowerCase().includes(term.trim().toLowerCase())
    );
    setShirts(filtered);
  };

  if (status === 'loading') return <div className="loading">Carregando produtos...</div>
  if (status === 'error')


    return (
      <div className="error">
        <p>Não foi possível carregar os produtos.</p>
        <button onClick={() => window.location.reload()}>Tentar novamente</button>
      </div>
    )


  return (
    <div className='all-srcbar3'>
    <div className='container3-principal'>
        <div className='srcbar3_container'>
        <div className='srcbar3_header'>
         <div className='icon3_src'>
          <IoMdSearch/>
          </div>
           <div className='inputsrc3'> <input  placeholder= 'Pesquise a marca' onChange={handleSearchChange}>
            
           </input>
           <hr />
           </div>
           
           
           </div>
           
           
     </div>
           <hr />
           <div className='cardproducts3-allcontainer'>
            <button className='arrow-button' onClick={() => setShirts(allShirts.slice(0,4))}><IoIosArrowBack /></button>
            <div className='cardproducts3-list'>
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
<button className='arrow-button' onClick={changingProducts}><IoIosArrowForward />
</button>
        </div>
    </div>
    </div>
  )
}

export default SrcBar