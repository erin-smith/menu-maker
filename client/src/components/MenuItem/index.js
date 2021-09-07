import React,{useState} from "react";
import SideBar from "../SideBar";
import {Row} from "../Grid";


function MenuItem ({data, category, onClick}) {

  const [sideBarVisible, setSideBarVisible] = useState(false);

  const itemData = {
    ...data,
    category:category
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
      <SideBar show={sideBarVisible} itemData={itemData} onSubmit={onSubmit} onCancel={onCancel}/>
      <div className="col-md-8">
        <Row>
          <div className="container">
            <li className="list-group-item p-4" key={data.id} onClick={clickHandler}><img src={data.photo} alt={data.name}/>
              <div className="d-inline m-3">{data.name}</div>--<div className="d-inline m-2"> ${data.price}</div>
              <div className="word-wrap m-3">{data.description}</div>
            </li> 
          </div>
        </Row>
    </div>
  </>
  );
}

export default MenuItem;