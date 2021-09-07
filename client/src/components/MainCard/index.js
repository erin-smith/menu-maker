import React, {useState, useEffect} from "react";
import MenuSelectButton from "../MenuSelectButton";
import EditButton from "../EditButton";
import MenuList from "../MenuList";
import {Container, Row} from "../Grid";
import API from "../../utils/API";
import CategoryModal from "../CategoryModal"



function MainCard (){

  const [selectedMenuData, setSelectedMenuData] = useState({categories:[],daypart:""});
  const [selectedMenuId, setSelectedMenuId] = useState();
  const [menuList, setMenuList] = useState([]);
 
   // Load entrees and store them with menu1
   useEffect(() => {
     console.log("fetching");
     API.getMenus()
     .then(res => {
       console.log(res)
       setMenuList(res.data.map((x)=>{
         return {id:x._id, daypart:x.daypart}
       }));
       if(res.data.length){
         selectMenu(res.data[0]._id);
       }
      })
     .catch(err => console.log(err, "Right here Error!!"));

   }, [])
 
  function selectMenu(id) {
    console.log("selecting",id)
    setSelectedMenuId(id);
    loadMenu(id);
  };

  function loadMenu(id){
    console.log("loading", id);
    API.getMenu(id)
      .then(res => {
        console.log(res)
        setSelectedMenuData(res.data)
      })
    .catch(err => console.log(err, "Right here Error!!"));
  }

   function onNewCategory(name){
     console.log("new cat:",name);

        setSelectedMenuData((oldMenu)=>
        {
          let newCat = {id:Date.now(), name:name, items:[]}
          let updatedMenu = {categories:oldMenu.categories, daypart:oldMenu.daypart};
          updatedMenu.categories.push(newCat);
          API.updateMenu(selectedMenuId, updatedMenu)
              .then(() => console.log("menu updated", updatedMenu))
              .catch((err) => console.log(err));
          
          return updatedMenu;
        } )
   }
   function onMenuSelectChange(newMenu){
      console.log("menu selected", newMenu)
      loadMenu(newMenu)
   }

   function onItemClick(){
    console.log("item clicked")
   }

   function onNewItem(categoryId, itemData){
    console.log("new item", categoryId, itemData)
   }


    return (
        <div className="container mt-5">
          <div className="card mb-4">
            <div className="card-header pt-4">
              <MenuSelectButton onSelectionChange={onMenuSelectChange} selectedMenu={selectedMenuId} menuList={menuList}/>
            <p className="float-right d-inline">"Served Everyday: 6am - 11am" &nbsp; <span className = "d-inline"><EditButton/></span></p>
            </div>
            <div className="card-body">
              <Row>
              <div className="container">
              <MenuList menus={selectedMenuData} onNewItem={onNewItem} onItemClick={onItemClick}/>
              <CategoryModal onNewCategory={onNewCategory}/>
              </div>
              </Row>
              
              </div>
        </div>
        </div>
      );
    };
    export default MainCard;