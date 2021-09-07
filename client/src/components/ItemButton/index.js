// import React, {useState} from "react";
// import styled from "styled-components";
// import ItemModal from "../ItemModal";
// import {GlobalStyle} from "../globalStyles";

// const Button = styled.button`
// min-width: 100px;
// padding: 8px 8px;
// border-radius: 4px;
// border: none;
// background: #17a2b8;
// color: #fff;
// font-size: 16px;
// cursor: pointer;
// `;

// function ItemButton() {
//     const [showModal, setShowModal] = useState(false)

//     const openModal = () => {
//         setShowModal(prev => !prev)
//     }
//     return (
//     <>
//     <div className="d-inline ml-4">
//     <Button onClick={openModal}><i className="fas fa-plus-circle mr-1"/>Add Item</Button>
//     <ItemModal showModal={showModal} setShowModal={setShowModal}/>
//     </div>
//     <GlobalStyle/>
//     </>
//     )
// }
// export default ItemButton;