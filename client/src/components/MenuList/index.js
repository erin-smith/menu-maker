import React from "react";
import Category from "../Category";
import MenuItem from "../MenuItem";


function MenuList ({menus, onNewItem, onItemClick}) {

  return (
    <div>
    {menus.categories.length ? (
      <div>
        {
          menus.categories.map(
            (category) => (
              <Category id={category.id} name={category.name} onNewItem={onNewItem}>
              {category.items.map(
                (item) => (
                  <MenuItem data={item}
                    category={category}
                    onClick={onItemClick}
                  />
                )
              )}
          </Category>
        ))}
      </div>
   ) : ( 
    <h3>No categories to display</h3>
  )} 
  </div>
  );
}

export default MenuList;