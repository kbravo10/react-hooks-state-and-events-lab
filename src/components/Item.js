import React,{useState} from "react";

function Item({ name, category }) {
  let [itemInCart, setItemInCart] = useState(false)
  function inCart(){
     setItemInCart((itemInCart) => !itemInCart);
  }

  return (
    <li className={itemInCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={inCart}>{itemInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
