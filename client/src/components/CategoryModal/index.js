import React, { useEffect, useState, useCallback } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import dessert from "../../images/dessert.png";
import "./style.css";

function CategoryModal({ showModal, setShowModal, onNewCategory}) {
  const [formObject, setFormObject] = useState({});

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }      
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
      event.preventDefault();
      let x = document.getElementById("category").value.trim();
      if (x === "") {
          alert("Please enter a new category");
      }
      else{
          onNewCategory(formObject.newCategory);
          setShow(false);
      }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="CatButton" onClick={handleShow}>
      <i className="fas fa-plus-circle mr-1"/>Add New Category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  id="close" closeButton>
          <Modal.Title>Add a New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-md-6">
                    <img src={dessert} width="180px" height="240px" alt="Category"/>
                    </div>
                    <div className="col-md-6">
             <label forhtml="category"><h5><strong>Enter Category Name:&nbsp;</strong></h5></label>
            <input
                className="form-control"
                onChange={handleInputChange}
                value={formObject.categories}
                name="newCategory"
                placeholder="(e.g. Dessert)"
                id="category"
            />
            <div className="container-fluid m-2 p-3">
            <Button  className="d-inline" variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="d-inline ml-4" variant="success" onClick={handleFormSubmit}>
            Create
          </Button>
          </div>
            </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
      
export default CategoryModal;
