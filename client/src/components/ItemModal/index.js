import React, { useRef, useEffect, useState, useCallback } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DietaryButton from "../DietaryButton";
import TemperatureButton from "../TemperatureButton";
import ImageUpload from "../ImageUpload";


function ItemModal({ showModal, setShowModal, onNewItem}) {


    // const [name, setName]= useState("");
    // const [description, setDescription]= useState("");
    // const [category, setCategory]= useState("");
    // const [price, setPrice]= useState("");
    // const [modifiers, setModifiers]= useState("");
    // const [temperature, setTemperature] = useState("");
    // const [dietaryAttributes, setDietaryAttributes]= useState("");
    // const [photo, setPhoto] = useState("");

    const modalRef = useRef();

    // const onChangeFile = e => {
    //     setPhoto(e.target.files[0]);
    // }

    // const closeModal = (e) => {
    //     if (modalRef.current === e.target) {
    //         setShowModal(false);
    //     }
    // };

    // const changeOnClick = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();

    //     formData.append("name", name);
    //     formData.append("description", description);
    //     formData.append("category", category);
    //     formData.append("price", price);
    //     formData.append("modifiers", modifiers);
    //     formData.append("temperature", temperature);
    //     formData.append("dietaryAttributes", dietaryAttributes);
    //     formData.append("photo", photo);
    // };

    const [myState, setMyState] = useState({
      available:false,
      dietaryAttributes:["Vegan"],
      modifiers:[{
        id:"1",
        name:"test",
        price:1.5
      }]
    });

    function handleInputChange(event) {
      let { name, value } = event.target;
      setMyState({ ...myState, [name]: value });
    }

  function onTemperatureChange(value) {
    setMyState({ ...myState, ["temperature"]: value });
  }

  function onImageChanged(newImage){
    setMyState({ ...myState, ["image"]: newImage });
  }


  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  function onSubmit(){
    console.log(myState)
    onNewItem(myState);
  }

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const [show, setShow] = useState(false);
  // const [inputImageValue, setInputImageValue] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
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
                <form className="form-group" encType="multipart/form-data">
                  <label htmlFor="name">Item Name:&nbsp;</label>
                  <input
                    className="form-control"
                    placeholder="Enter Item Name"
                    id="item"
                    type="text"
                    name="name"
                    value={myState["name"]}
                    onChange={handleInputChange}
                  />
                  <label forhtml="description">Description:&nbsp;</label>
                  <input
                    className="form-control"
                    placeholder=" Item Description"
                    id="description"
                    type="text"
                    name="description"
                    value={myState["description"]}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="description">Item Price:&nbsp;</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="price"
                    name="price"
                    value={myState["price"]}
                    onChange={handleInputChange}
                  />

                  <label forhtml="taxCategory">Tax Category:&nbsp;</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="tax category"
                    name="taxCategory"
                    value={myState["taxCategory"]}
                    onChange={handleInputChange}
                  />
                  <div className="form-group mt-2">
                <label forhtml="temperature">Temperature:&nbsp;</label>
                  <TemperatureButton
                    name="temperature"
                    onTemperatureChange={onTemperatureChange}/>
                 </div>
                <div className="form-group mt-2">
                <label forhtml="dietary">Dietary Attributes:&nbsp;</label>
                <DietaryButton/>
                  </div>

                  <ImageUpload data={myState["image"]} onImageChanged={onImageChanged}/>

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
