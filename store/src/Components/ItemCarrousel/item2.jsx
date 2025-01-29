import { useState } from "react"
import '../ItemCarrousel/item2.css';

const Item2 = ({ItemValues}) => {
const {img,price,img2,title} = ItemValues;
const [currentImg, setCurrentImg] = useState(img);

  return (
    <div className="container2">
    <div 
    onMouseMove={() => setCurrentImg(img2)}
      onMouseOut={() => setCurrentImg(img)}
      className="item2"
    >
<img src={currentImg}  className="item_image2" alt=""/>
<div className="item_info2">
  <p> {title}</p>
<h1 className="item_price2">{price}</h1>

</div>
    </div>
    </div>
    
  )
}

export default Item2 