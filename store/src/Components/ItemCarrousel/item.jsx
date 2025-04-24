import { useState } from "react"
import '../ItemCarrousel/item.css';
import { Link } from "react-router-dom";

const Item = ({ItemValues}) => {
const {img,price,img2,title} = ItemValues;
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
  <div className="item-title"><p> {title}</p></div>
<h2 className="item_price">{price}</h2>


</div>
    </div>
    </div>
    
  )
}

export default Item 