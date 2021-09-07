import React, { useState } from "react";
import { OffCanvas, OffCanvasMenu } from "react-offcanvas";
import DietaryButton from "../DietaryButton";
import TemperatureButton from "../TemperatureButton";
import styles from "./style.css";

function SideBar({ show, itemData, onSubmit, onCancel }) {
  const initalData = {
    itemNameInput: itemData.name,
    itemDescriptionInput: itemData.description,
    itemPriceInput: itemData.price,
    itemCategoryInput: itemData.category.name,
    itemTaxCategoryInput: itemData.taxCategory,
    itemDietaryAttributesInput: itemData.dietaryAttributes.join(", "),
    itemTemperatureInput: itemData.temperature
  };

  console.log("input:",initalData)

  const [myState, setMyState] = useState(initalData);

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log("input change", name, value);
    setMyState({ ...myState, [name]: value });
  }

  function onTemperatureChange(value) {
    setMyState({ ...myState, ["itemTemperatureInput"]: value });
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
        style={{ fontSize: "18px", backgroundColor: "white", height: "100vh" }}
      >
        <div className="container">
          <h2 className="mt-3 mr-2 text-center">
            <u>Edit a Menu Item</u>
          </h2>
          <div className="form-group">
            <label forhtml="name">Item Name:&nbsp;</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Item Name"
              onChange={handleInputChange}
              name="itemNameInput"
              value={myState["itemNameInput"]}
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label bold" forhtml="gridCheck"><strong>
                Item Available</strong>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label forhtml="description">Description:&nbsp;</label>

            <input
              type="text"
              className="form-control"
              placeholder="Item Description"
              onChange={handleInputChange}
              name="itemDescriptionInput"
              value={myState["itemDescriptionInput"]}
            />
          </div>

          <div className="form-group">
            <label forhtml="category">Category:&nbsp;</label>

            <input
              type="text"
              className="form-control"
              placeholder="Select Category"
              readonly
              name="itemCategoryInput"
              value={myState["itemCategoryInput"]}
            />
          </div>

          <div className="form-group">
            <label forhtml="price">Item Price:&nbsp;</label>

            <input
              className="form-control"
              type="number"
              placeholder="price"
              onChange={handleInputChange}
              name="itemPriceInput"
              value={myState["itemPriceInput"]}
            />
          </div>

          <div className="form-group">
            <label forhtml="modifier">Modifiers:&nbsp;</label>

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
            <label forhtml="modifier">Temperature:&nbsp;</label>

           <TemperatureButton
              className="form-control"
              type="temperature"
              placeholder="spicy"
              onTemperatureChange={onTemperatureChange}
              name="itemTemperatureInput"
              temperature={myState["itemTemperatureInput"]}
            />
          </div>
          <div className="form-group">
            <label forhtml="modifier">Tax Category:&nbsp;</label>

            <input
              className="form-control"
              type="tax category"
              placeholder="Restaurant Food"
              onChange={handleInputChange}
              name="itemTaxCategoryInput"
              value={myState["itemTaxCategoryInput"]}
            />
          </div>

          <div className="form-group">
            <label forhtml="dietary">Dietary Attributes:&nbsp;</label>
            <DietaryButton
              className="form-control"
              placeholder="e.g. vegan"
              onChange={handleInputChange}
              name="itemDietaryAttributesInput"
              value={myState["itemDietaryAttributesInput"]}
            />

            <div className="form-group">

              <label forhtml="exampleFormControlFile1">Upload photo:</label>

              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
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
              className="btn btn-danger mt-3 ml-5 d-inline"
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
