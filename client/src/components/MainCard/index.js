import React, {useState, useEffect} from "react";
import MenuSelectButton from "../MenuSelectButton";
import EditButton from "../EditButton";
import MenuList from "../MenuList";
import API from "../../utils/API";
import CategoryModal from "../CategoryModal"



function MainCard (){

  const [selectedMenuData, setSelectedMenuData] = useState({categories:[], menuTime:"", daypart:""});
  const [selectedMenuId, setSelectedMenuId] = useState();
  const [menuList, setMenuList] = useState([]);
 
   // Load entrees and store them with menu
   useEffect(() => {
     console.log("fetching");
     API.getMenus()
     .then(res => {
       //console.log("db data:",res)
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
    loadMenu(id);
    setSelectedMenuId(id);
  };

  function loadMenu(id){
    console.log("loading menu", id);
    API.getMenu(id)
      .then(res => {
        setSelectedMenuData(res.data)
        console.log("menu data loaded")
      })
    .catch(err => console.log(err, "Right here Error!!"));
  }

   function onNewCategory(name){
        setSelectedMenuData((oldMenu)=>
        {
          let newCat = {id:Date.now(), name:name, items:[]}
          let updatedMenu = JSON.parse(JSON.stringify(oldMenu));
          updatedMenu.categories.push(newCat);
          console.log("menuid",selectedMenuId);
          console.log(updatedMenu);
          API.updateMenu(selectedMenuId, updatedMenu)
              .then(() => console.log("new category added", name))
              .catch((err) => console.log(err));
          return updatedMenu;
        } )
   }

   function onItemUpdate(itemData, category){
      setSelectedMenuData((oldMenu)=>
      {
        let updatedMenu = JSON.parse(JSON.stringify(oldMenu));
        const cat = updatedMenu.categories.find(x=> x.id ===category.id);
        const i = cat.items.findIndex(x => x.id === itemData.id);
        cat.items[i] = itemData;
        
        API.updateMenu(selectedMenuId, updatedMenu)
            .then(() => console.log("updated item", itemData.name))
            .catch((err) => console.log(err));
        return updatedMenu;
      } )
   }

   function onMenuSelectChange(newMenu){
      console.log("menu selected", newMenu)
      selectMenu(newMenu)
   }

   function onItemClick(){
    
   }

   function onNewItem(categoryId, itemData){
    setSelectedMenuData((oldMenu)=>
    {
      let updatedMenu = JSON.parse(JSON.stringify(oldMenu));
      const cat = updatedMenu.categories.find(x=> x.id ===categoryId);
      cat.items.push(itemData);

      API.updateMenu(selectedMenuId, updatedMenu)
          .then(() => console.log("Item added: ", itemData.name))
          .catch((err) => console.log(err));
      return updatedMenu;
    } )
   }

   function onTimeChange(newTime){
      setSelectedMenuData((oldMenu)=>
      {
        let updatedMenu = JSON.parse(JSON.stringify(oldMenu));
        updatedMenu.menuTime = newTime;
        
        API.updateMenu(selectedMenuId, updatedMenu)
            .then(() => console.log("updated time",newTime))
            .catch((err) => console.log(err));
        return updatedMenu;
      } )
   }

    return (
        <div className="container-fluid mt-5">
          <div className="card mb-4">
            <div className="card-header pt-4">
              <div className="row">
                <div className="col">
              <MenuSelectButton onSelectionChange={onMenuSelectChange} selectedMenu={selectedMenuId} menuList={menuList}/>
              </div>
              <div className="col">
              {selectedMenuId ? (
                <EditButton onTimeChange={onTimeChange} timeData={selectedMenuData.menuTime} className="d-inline float-right"/>
              ):(<div></div>)}
              </div>
              </div>
            </div>
            <div className="card-body">
              <div className="container-fluid">
               <div className= "col-md-8">
              <MenuList menus={selectedMenuData} onNewItem={onNewItem} onItemClick={onItemClick} onItemUpdate={onItemUpdate}/>
              <CategoryModal onNewCategory={onNewCategory}/>
             </div>
              </div>
              
              
              </div>
        </div>
        </div>
      );
    };
    export default MainCard;