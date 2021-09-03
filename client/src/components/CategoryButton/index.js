import React, {useState} from "react";
import styled from "styled-components";
import CategoryModal from "../CategoryModal";
import {GlobalStyle} from "../globalStyles";

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

function CategoryButton() {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }
    return (
    <>
    <Button onClick={openModal}><i className="fas fa-plus-circle mr-1"/>Add New Category</Button>
    <CategoryModal showModal={showModal} setShowModal={setShowModal}/>
    <GlobalStyle/>
    </>
    )
}
export default CategoryButton;