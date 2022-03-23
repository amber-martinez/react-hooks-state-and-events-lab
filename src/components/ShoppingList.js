import React, { useState } from "react";
import { findDOMNode } from "react-dom";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setCat] = useState("All")


  function handleFilter(e) {
    setCat(e.target.value)
    console.log(e.target.value)
  }


  const filteredFoods = items.filter(food => {
    if (selectedCategory === food.category) {
      return food
    } if (selectedCategory === "All") {
      return items
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredFoods.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
