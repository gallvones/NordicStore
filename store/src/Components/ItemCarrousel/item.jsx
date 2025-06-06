import { useState, useContext } from "react"
import '../ItemCarrousel/item.css';
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext';

const Item = ({ItemValues}) => {
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
    <div className="all-item1-container">
    <div 
    onMouseMove={() => setCurrentImg(img2)}
      onMouseOut={() => setCurrentImg(img)}
      className="item"
      
    ><Link to='/section1' >
<img src={currentImg}  className="item_image" alt=""/></Link>
</div>

<div className="item_info">
  <div className="item-title"><p> {title}</p></div>
<div className="price-and-cart">
  <p className="item_price"> <span className="value-item">Valor:</span> {price}</p>
  <button type = 'button' className='add-cart' onClick={addCart}> <BsFillCartPlusFill /></button>
  </div> 


</div>
    </div>
    
  )
}

export default Item 