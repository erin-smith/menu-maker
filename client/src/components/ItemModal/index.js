import React, { useRef, useEffect, useState, useCallback } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import pancake from "../../images/pancake.jpeg"

// const Background = styled.div`
//   width: 45%;
//   height: 60%;
//   background: rgba(0, 0, 0, 0.8);
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const ModalWrapper = styled.div`
//   width: 600px;
//   height: 400px;
//   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   background: #fff;
//   color: #000;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   position: relative;
//   z-index: 10;
//   border-radius: 10px;
// `;
// const ModalImg = styled.img`
//   width: 90%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;
// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: top;
//   align-items: center;
//   line-height: 1.8;
//   color: #141414;

//   p {
//     margin-bottom: 1rem;
//   }

//   button {
//     padding: 8px 10px;
//     background: #79d9e8;
//     color: #fff;
//     border: none;
//   }
// `;

// const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 10;
// `;

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
return (
    <>
      <Button variant= "info" id="CatButton" onClick={handleShow}>
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
                 
                <div className="form-group mt-2">
                  
                  <label forhtml="description" className="d-inline mr-4">Dietary Attributes:&nbsp;</label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <div className="form-check form-check-inline">
                    <label className="form-check-label" forhtml="inlineRadio1">
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
                    <label className="form-check-label" forhtml="inlineRadio2">
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
                    <label className="form-check-label" forhtml="inlineRadio3">
                      Gluten Free
                    </label>
                  </div>
                  </div>

                  <label forhtml="modifiers">Modifiers:&nbsp;</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="protein"
                    id="modifier"
                  />
                    
                  <label forhtml="photo">Photo:&nbsp;</label>
                  <img src={pancake} width="100px" height="160px"
                  className="m-2 mr-5"/>
                  <label forhtml="exampleFormControlFile1">Upload photo:
                  <input
                    type="file"
                    className="form-control-file d-inline"
                    id="exampleFormControlFile1"
                  />
                  </label>

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
