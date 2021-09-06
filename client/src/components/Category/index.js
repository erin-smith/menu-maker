import React from "react";
import ItemButton from "../ItemButton"

function Category ({children, id, name, onNewItem}) {
   
function handleNewItem(data){
  onNewItem(id, data);
}

  return (
    <div>
      <h3>{name}: <ItemButton onNewItem={handleNewItem}/></h3>
      <ul>
        {children}
      </ul>
    </div>
  );
}

export default Category;