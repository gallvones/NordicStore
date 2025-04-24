import { useState } from "react"
import '../ItemCarrousel/item3.css';
import { Link } from "react-router-dom";
const Item3 = ({ItemValues}) => {
const {img,price,img2,title} = ItemValues;
const [currentImg, setCurrentImg] = useState(img);

  return (
    <div className="container3">
    <div 
    onMouseMove={() => setCurrentImg(img2)}
      onMouseOut={() => setCurrentImg(img)}
      className="item3"
    ><Link to='/section3'/>
<img src={currentImg}  className="item_image3" alt=""/>
<div className="item_info3">
<div className="item-title3"><p> {title}</p></div>
<h1 className="item_price3">{price}</h1>

</div>
    </div>
    </div>
    
  )
}

export default Item3;