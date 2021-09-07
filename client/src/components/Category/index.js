import React from "react";
import ItemButton from "../ItemButton"

function Category ({children, id, name, onNewItem}) {
   
function handleNewItem(data){
  onNewItem(id, data);
}

  return (
    <div>
      <h5><i><b>{name}:</b></i><ItemButton onNewItem={handleNewItem}/></h5>
      <ul>
        {children}
      </ul>
    </div>
  );
}

export default Category;