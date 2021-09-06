import React, { useRef, useEffect, useState, useCallback } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function CategoryModal({ showModal, setShowModal, onNewCategory}) {
  const [formObject, setFormObject] = useState({});
  const modalRef = useRef();

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
    onNewCategory(formObject.name);
    setShow(false);
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
        <Modal.Header closeButton>
          <Modal.Title>Add a New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input
                className="form-control"
                onChange={handleInputChange}
                value={formObject.categories}
                name="name"
                placeholder="Category (e.g. Dessert)"
                id="category"
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
      
export default CategoryModal;
