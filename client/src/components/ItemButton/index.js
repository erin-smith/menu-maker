import React, {useState} from "react";
import styled from "styled-components";
import ItemModal from "../ItemModal";
import {GlobalStyle} from "../globalStyles";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

const Button = styled.button`
min-width: 100px;
padding: 8px 16px;
border-radius: 4px;
border: none;
background: #141414;
color: #fff;
font-size: 18px;
cursor: pointer;
`;

function ItemButton() {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }
    return (
    <>
    <Button onClick={openModal}><i className="fas fa-plus-circle mr-1"/>Add New Menu Item</Button>
    <ItemModal showModal={showModal} setShowModal={setShowModal}/>
    <GlobalStyle/>
    </>
    )
}
export default ItemButton;