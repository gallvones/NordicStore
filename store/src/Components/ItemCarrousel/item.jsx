import { useState } from "react"
import '../ItemCarrousel/item.css';
import { Link } from "react-router-dom";

const Item = ({ItemValues}) => {
const {img,price,img2,title, size} = ItemValues;
const [currentImg, setCurrentImg] = useState(img);


  return (
    <div className="container">
    <div 
    onMouseMove={() => setCurrentImg(img2)}
      onMouseOut={() => setCurrentImg(img)}
      className="item"
      
    ><Link to='/section1' >
<img src={currentImg}  className="item_image" alt=""/></Link>
<div className="item_info">
  <div className="item-title"><p> {title}</p> <p>- {size}</p></div>
<h1 className="item_price">{price}</h1>


</div>
    </div>
    </div>
    
  )
}

export default Item 