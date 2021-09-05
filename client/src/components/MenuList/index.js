import React, {useEffect, useState} from "react";
import API from "../../utils/API";

function MenuList () {

     const [menus, setMenus] = useState([])
 
   // Load entrees and store them with menu1
   useEffect(() => {
     console.log("fetching");
     loadMenus()
   }, [])
 
   function loadMenus() {
     API.getMenus()
       .then(res => {
        console.log(res)
         setMenus(res.data)
       }
       )
       .catch(err => console.log(err, "Right here Error!!"));
   };
 
  return (
    <div>
      {menus.length ? (
    <div>
    <h4>Menu Items</h4>
    {menus[0].categories.map((category) => (
    <ul>Category: {category.name}
          <li key={category.id}>{category.items[0].name} -- {category.items[0].price}
          <p>
               <img src={category.items[0].photo}/></p>
              <p>{category.items[0].description}</p>
          </li>
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