import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
    
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        console.log('closing...');
        setIsOpen(false);
    }

    return (
        <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
            <h1>Hola Modal</h1>
            <hr />
            <span>Relleno</span>
        </Modal>
    )
}
