import { useState, useContext } from "react"
import '../ItemCarrousel/item.css';
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext';

const Item = ({ItemValues}) => {
const {img,price,img2,title} = ItemValues;
const [currentImg, setCurrentImg] = useState(img);
const {setItemsCart} = useContext(AppContext);
const addCart = () => {
  setItemsCart(prev => [
    ...prev,
    { img, title, price, quantity: 1, size: 'G' }
  ]);
};


  return (
    <div className="container">
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