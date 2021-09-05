import React, {useEffect, useState} from "react";
import API from "../../utils/API";


function MenuList ({menus}) {
   
  return (
    <div>
    {menus.categories.length ? (
      <div>
        <h4>Menu Items</h4>
        {menus.categories.map((category) => (
          <ul>Category: {category.name}
            {category.items.length ? (
              <li key={category.id}>
                {
                category.items[0].name} -- {category.items[0].price}
              <p>
                  <img src={category.items[0].photo} alt="menu item"/></p>
                  <p>{category.items[0].description}</p>
              </li> 
            ):(<p></p>)}
          </ul>
        ))}
      </div>
   ) : ( 
    <h3>No Results to Display</h3>
  )} 
  </div>
  );
}

export default MenuList;