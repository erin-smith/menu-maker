import React,{useState} from "react";
import SideBar from "../SideBar";


function MenuItem ({data, id, onClick}) {

  const [sideBarVisible, setSideBarVisible] = useState(false);

  const itemData = {
    ...data,
    category:id
  };

  function clickHandler(){
    console.log("item clicked");
    setSideBarVisible((prevState) => {return !prevState});
    onClick();
  }

  function onSubmit(newItemData){
    console.log("item edited ", newItemData)
    setSideBarVisible(false);
  }

  function onCancel(){
    setSideBarVisible(false);
  }

  return (
    <>
    <SideBar show={sideBarVisible} itemData={data} onSubmit={onSubmit} onCancel={onCancel}/>

    <li key={id} onClick={clickHandler}>
    {data.name} -- {data.price}
  <p>
      <img src={data.photo} alt={data.name}/></p>
      <p>{data.description}</p>
  </li> 
  </>
  );
}

export default MenuItem;