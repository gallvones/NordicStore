import { useState, useContext } from "react"
import '../ItemCarrousel/item3.css';
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext';

const Item3 = ({ItemValues}) => {
const {img,price,img2,title} = ItemValues;
const [currentImg, setCurrentImg] = useState(img);
const {setItemsCart, itemsCart} = useContext(AppContext);


const addCart = () => {
  const newItem = { img, title, price, quantity: 1, size: 'G' };
  const updatedCart = [...itemsCart, newItem];
  
  setItemsCart(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};


  return (
    <div className="all-item3-container">
    <div 
    onMouseMove={() => setCurrentImg(img2)}
      onMouseOut={() => setCurrentImg(img)}
      className="item3"
      
    ><Link to='/section3' >
<img src={currentImg}  className="item3_image" alt=""/></Link>
</div>

<div className="item3_info">
  <div className="item3-title"><p> {title}</p></div>
<div className="price3-and-cart">
  <p className="item3_price"> <span className="value-item">Valor:</span> {price}</p>
  <button type = 'item3-button' className='add-cart' onClick={addCart}> <BsFillCartPlusFill /></button>
  </div> 


</div>
    </div>
    
  )
}

export default Item3;