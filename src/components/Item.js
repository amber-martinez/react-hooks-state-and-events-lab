import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false);
  function cartHandler() {
    setCart((cart) => !cart)
  }

  const cartClass = cart ? "in-cart" : ""


  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartHandler} className="add">{cart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
