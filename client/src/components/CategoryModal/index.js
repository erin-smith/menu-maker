import React, {useRef, useEffect, useCallback} from "react";
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
width: 50%;
height: 50%;
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
justify-content: center;
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

function CategoryModal ({showModal, setShowModal}) {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
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
                        <ModalImg src={require('../../assets/images/breakfast7.jpeg')} alt='latte'/>
                    <ModalContent>
                        <h3>Add a New Category</h3>
                        <input></input>
                        <button className="mt-2">Submit</button>
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

export default CategoryModal;