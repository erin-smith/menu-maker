import React, { useRef, useEffect, useState, useCallback } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DietaryButton from "../DietaryButton";
import TemperatureButton from "../TemperatureButton";
import ImageUpload from "../ImageUpload";


function ItemModal({ showModal, setShowModal, onNewItem}) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  function onSubmit(){
    let newItem = {};
    onNewItem(newItem);
  }

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const [show, setShow] = useState(false);
  const [inputImageValue, setInputImageValue] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

//   document.getElementById("Img").onClick = handleImageChange();
       
//   function handleImageChange(e) {
//     setInputImageValue({inputImageValue: e.target.value
//               })
//             }
    
return (
    <>
      <Button variant= "info" id="my" onClick={handleShow}>
      <i className="fas fa-plus-circle mr-1"/>Add Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form className="form-group" action="#">
                  <label forhtml="name">Item Name:&nbsp;</label>
                  <input
                    className="form-control"
                    placeholder="Enter Item Name"
                    id="item"
                  />
                  <label forhtml="description">Description:&nbsp;</label>
                  <input
                    className="form-control"
                    placeholder=" Item Description"
                    id="description"
                  />
                  <label forhtml="name">Category:&nbsp;</label>
                  <input
                    className="form-control"
                    placeholder="Enter Category"
                    id="item"
                  />
                  <label forhtml="description">Item Price:&nbsp;</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="price"
                    id="price"
                  />

             <label forhtml="modifiers">Modifiers:&nbsp;</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="protein"
                    id="modifier"
                  />
                  <div className="form-group mt-2">
                <label forhtml="temperature">Temperature:&nbsp;</label>
                  <TemperatureButton/>
                 </div>
                <div className="form-group mt-2">
                <label forhtml="dietary">Dietary Attributes:&nbsp;</label>
                <DietaryButton/>
                  </div>

                 <ImageUpload/>

                </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemModal;
