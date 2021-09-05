import React, {useRef, useEffect, useCallback} from "react";
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import pancake from "../../images/pancake.jpeg";

const Background = styled.div`
width: 45%;
height: 60%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`
const ModalWrapper = styled.div`
 width: 600px;
 height: 400px;
 box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
 background: #fff;
 color: #000;
 display: grid;
 grid-template-columns: 1fr 1fr;
 position: relative;
 z-index: 10;
 border-radius: 10px;
`
const ModalImg = styled.img`
width: 100%;
height: 100%;
border-radius: 10px 0 0 10px;
background: #000;
`
const ModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: top;
align-items: center;
line-height: 1.8;
color: #141414;

p {
    margin-bottom: 1rem;
}

button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
}
`;

const CloseModalButton = styled(MdClose)`
 cursor: pointer;
 position: absolute;
  top: 20px;
 right: 20px;
 width: 32px;
 height: 32px;
 padding: 0;
 z-index: 10;
 `;

function ItemModal ({showModal, setShowModal}) {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false)
        }
    };

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal){
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])
            return(
                <>
                {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                    <ModalWrapper showModal={showModal}>
                        <ModalImg src={pancake} alt='pancake'/>
                    <ModalContent>
                        <h5 className="mt-5">Add a New Menu Item</h5>
            <form className="form-inline" action="/action_page.php">
                <label forHtml="name">Item Name:</label>
                <input className="form-control" placeholder="Enter Item Name" id="item"/>
                <label forHtml="description">Description:</label>
                 <input className="form-control" placeholder=" Item Description" id="description"/>
                 <label forHtml="name">Category:</label>
                <input className="form-control" placeholder="Enter Category" id="item"/>
                <label forHtml="description">Price of Item:</label>
                 <input className="form-control"  type="number" placeholder="price" id="price"/>
                 <label forHtml="photo">Upload a photo:</label>
                  <input type="file"/> 
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
                    </ModalContent>
                    <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal
                    (prev => !prev)}/>
                    </ModalWrapper>
                    </animated.div>
                </Background>
                ) : null }
                </>
            )
        };

export default ItemModal;
