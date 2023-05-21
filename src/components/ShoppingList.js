import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, setSelectedCategory] = useState("All")

  function filterList(event){
    setSelectedCategory(event.target.value);
  }

  const foodListToDisplay = items.filter((categoryList) => {
    
    if(selectedCategory === "All"){
      return true;
    }
    else if(categoryList.category === selectedCategory){
      return categoryList;
    }
  }
  )
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterList}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodListToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
