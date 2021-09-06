import React, {useState} from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody} from "react-offcanvas";
import styles from "./style.css"



function SideBar ({show, itemData, onSubmit, onCancel}){


    const initalData = {
        itemNameInput:itemData.name,
        itemDescriptionInput:itemData.description,
        itemPriceInput:itemData.price
    }

    const [myState, setMyState] = useState(initalData);

    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log("input change", name, value); 
        setMyState({ ...myState, [name]: value });
    }
    function handleSubmit(){
        console.log(myState);
        onSubmit(myState);
    }

    function handleCancel(){
        console.log("cancel")
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
        style={{ fontSize: "30px", backgroundColor: "white", height: "100vh" }}>
            <div className="container">
          <h2 className="mt-3 mr-2">Edit a Menu Item</h2>
                {/* <form className="form" action="#"> */}
                    <div class="form-group">
                  <label forHtml="name">Item Name:&nbsp;</label>
                  <input
                    type = "text"
                    className="form-control"
                    placeholder="Enter Item Name"
                    onChange={handleInputChange}
                    name="itemNameInput"
                    value={myState["itemNameInput"]}
                  />
                  </div>
                  <div class="form-group">
                  <label forHtml="description">Description:&nbsp;</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Item Description"
                    onChange={handleInputChange}
                    name="itemDescriptionInput"
                    value={myState["itemDescriptionInput"]}
                  />
                  </div>
                  <label forHtml="name">Category:&nbsp;</label>
                  <input
                    className="form-control"
                    placeholder="Enter Category"
                    onChange={handleInputChange}
                    name="itemCategoryInput"
                    value={myState["itemCategoryInput"]}
                  />
                  <label forHtml="description">Item Price:&nbsp;</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="price"
                    onChange={handleInputChange}
                    name="itemPriceInput"
                    value={myState["itemPriceInput"]}
                  />
                  <label forHtml="description">Modifiers:&nbsp;</label>
                  <input
                    className="form-control"
                    type="modifiers"
                    placeholder="protien"
                    onChange={handleInputChange}
                    name="itemModifiersInput"
                    value={myState["itemModifiersInput"]}
                  />

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" forHtml="inlineRadio1">
                      Vegan
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" forHtml="inlineRadio2">
                      Vegetarian
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="option3"
                    />
                    <label className="form-check-label" forHtml="inlineRadio3">
                      Gluten Free
                    </label>
                  </div>
                  <label forHtml="exampleFormControlFile1">Upload photo:</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />

                <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                    Submit
                    </button>
                  <button className="btn btn-primary mt-3" onClick={handleCancel}>
                    Cancel
                    </button>
                  {/* 
                </form> */}
                </div>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }
export default SideBar;
  