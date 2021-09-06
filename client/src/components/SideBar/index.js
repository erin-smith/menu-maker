import React, { Component } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody} from "react-offcanvas";
import styles from "./style.css"

export default class SideBar extends Component {
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    });
  }

  render() {
    return (
      <OffCanvas
        width={600}
        transitionDuration={300}
        effect={"overlay"}
        isMenuOpened={this.state.isMenuOpened}
        position={"right"}
      >
        <OffCanvasBody
        className={styles.bodyClass}
          style={{ fontSize: "20px" }}
        >
          <p>
            <a href="#" onClick={this.handleClick.bind(this)}>
              Click here
            </a>{" "}
            to toggle the menu.
          </p>
        </OffCanvasBody>
        <OffCanvasMenu 
        className={styles.menuClass}
        style={{ fontSize: "30px", backgroundColor: "white", height: "100vh" }}>
          <h2 className="mt-3 mr-2">Edit a Menu Item</h2>
                <form className="form-inline" action="/action_page.php">
                  <label forHtml="name">Item Name:&nbsp;</label>
                  <input
                    className="form-control"
                    placeholder="Enter Item Name"
                    id="item"
                  />
                  <label forHtml="description">Description:&nbsp;</label>
                  <input
                    className="form-control"
                    placeholder=" Item Description"
                    id="description"
                  />
                  <label forHtml="name">Category:&nbsp;</label>
                  <input
                    className="form-control"
                    placeholder="Enter Category"
                    id="item"
                  />
                  <label forHtml="description">Item Price:&nbsp;</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="price"
                    id="price"
                  />
                  <label forHtml="description">Modifiers:&nbsp;</label>
                  <input
                    className="form-control"
                    type="modifiers"
                    placeholder="protien"
                    id="modifier"
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

                  <button type="submit" className="btn btn-primary mt-3">
                    Submit
                  </button>
                </form>
              <a href="#" onClick={this.handleClick.bind(this)}>
                Close
              </a>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }

  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
}