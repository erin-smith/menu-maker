import React, { useState } from "react";
import { OffCanvas, OffCanvasMenu } from "react-offcanvas";
import DietaryButton from "../DietaryButton";
import ImageUpload from "../ImageUpload";
import TemperatureButton from "../TemperatureButton";
import styles from "./style.css";

function SideBar({ show, itemData, onSubmit, onCancel }) {
  const initalData = {
    ...itemData,
    itemCategoryInput: itemData.category.name
  };

  const [myState, setMyState] = useState(initalData);

  function handleInputChange(event) {
    let { name, value, checked } = event.target;
    if(name === "dietaryAttributes"){
      value = value.split("");
    }    
    if(name === "available"){
      value = checked;
    }
    console.log(event);
    setMyState({ ...myState, [name]: value });
  }

  function onTemperatureChange(value) {
      setMyState({ ...myState, ["temperature"]: value });
  }

  function onImageChanged(newImage){
    setMyState({ ...myState, ["image"]: newImage });
  }

  function handleSubmit() {
    console.log(myState);
    onSubmit(myState);
  }

  function handleCancel() {
    console.log("cancel");
    setMyState(initalData);
    onCancel();
  }

  return (
    <OffCanvas
      width={600}
      transitionDuration={300}
      effect={"overlay"}
      isMenuOpened={show}
      position={"right"}
    >
      <OffCanvasMenu
        className={styles.menuClass}
        style={{ zIndex: 1, fontSize: "18px", fontWeight:"900", backgroundColor:"#aceaeb", height: "100vh", fontFamily:"inherit", position:"fixed"}}
      >
        <div className="container">
          <h2 className="mt-3 mr-2 text-center">
            <u>Edit a Menu Item</u>
          </h2>
          <div className="form-group">
            <label htmlFor="name">Item Name:&nbsp;</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Item Name"
              onChange={handleInputChange}
              name="name"
              value={myState["name"]}
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                name="available"
                defaultChecked={myState["available"]}
                onChange={handleInputChange}
              />
              <label 
                className="form-check-label bold" htmlFor="gridCheck"><strong>
                Item Available</strong>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:&nbsp;</label>

            <input
              type="text"
              className="form-control"
              placeholder="Item Description"
              onChange={handleInputChange}
              name="description"
              value={myState["description"]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category:&nbsp;</label>

            <input
              type="text"
              className="form-control"
              placeholder="Select Category"
              readOnly
              name="itemCategoryInput"
              value={myState["itemCategoryInput"]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Item Price:&nbsp;</label>

            <input
              className="form-control"
              type="number"
              placeholder="price"
              onChange={handleInputChange}
              name="price"
              value={myState["price"]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="modifier">Modifiers:&nbsp;</label>

            <input
              className="form-control"
              type="modifiers"
              placeholder="protein"
              onChange={handleInputChange}
              name="itemModifierInput"
              value={myState["itemModifierInput"]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="modifier">Temperature:&nbsp;</label>

           <TemperatureButton
              className="form-control"
              type="temperature"
              placeholder="spicy"
              onTemperatureChange={onTemperatureChange}
              name="temperature"
              temperature={myState["temperature"]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="modifier">Tax Category:&nbsp;</label>

            <input
              className="form-control"
              type="tax category"
              placeholder="Restaurant Food"
              onChange={handleInputChange}
              name="taxCategory"
              value={myState["taxCategory"]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dietary">Dietary Attributes:&nbsp;</label>
            <DietaryButton
              className="form-control"
              placeholder="e.g. vegan"
              onChange={handleInputChange}
              name="dietaryAttributes"
              value={myState["dietaryAttributes"]}
            />

            <div className="form-group">
                <ImageUpload data={myState["image"]} onImageChanged={onImageChanged}/>
            </div>
          </div>
          <div className="form-group">
            <button
              className="btn btn-success mt-3 d-inline"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="btn btn-warning mt-3 ml-5 d-inline"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </OffCanvasMenu>
    </OffCanvas>
  );
}
export default SideBar;
