import { useState } from "react"
import '../ItemCarrousel/item.css'

const Item = ({ItemValues}) => {
const {img,price,img2,title} = ItemValues;
const [currentImg, setCurrentImg] = useState(img);

  return (
    <div className="container">
    <div 
    onMouseMove={() => setCurrentImg(img2)}
      onMouseOut={() => setCurrentImg(img)}
      className="item"
    >
<img src={currentImg}  className="item_image"/>
<div className="item_info">
  <p> {title}</p>
  <br/>
<h1 className="item_price">{price}</h1>

</div>
    </div>
    </div>
    
  )
}

export default Item 