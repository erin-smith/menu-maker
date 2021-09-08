import React from "react";
import ItemModal from "../ItemModal"

function Category ({children, id, name, onNewItem}) {
   
  function handleNewItem(data){
    onNewItem(id, data);
  }

  return (
    <div>
      <h5><i><b className="mr-4">{name}:</b></i><ItemModal onNewItem={handleNewItem}/></h5>
      <ul>
        {children}
      </ul>
    </div>
  );
}

export default Category;