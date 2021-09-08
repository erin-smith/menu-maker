import React from "react";
import Category from "../Category";
import MenuItem from "../MenuItem";


function MenuList ({menus, onNewItem, onItemClick, onItemUpdate}) {
  return (
    <div>
    {menus.categories.length ? (
      <div>
        {
          menus.categories.map(
            (category) => (
              <Category key={category.id} id={category.id} name={category.name} onNewItem={onNewItem}>
              {category.items.map(
                (item) => (
                  <MenuItem key={category.id+item.id}
                    data={item}
                    category={category}
                    onClick={onItemClick}
                    onItemUpdate={onItemUpdate}
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