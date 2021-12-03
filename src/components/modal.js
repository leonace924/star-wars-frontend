import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ isOpen, closeModal, children }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      maxWidth: '94vw',
      transform: 'translate(-50%, -50%)',
      zIndex: '100',
      padding: 0,
    },
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Movies Modal"
      >
        <>
          <div className="relative flex items-center p-4">
            <h3 className="text-2xl font-semibold text-star-primary">Movies List</h3>
            <div
              className="absolute -translate-y-1/2 cursor-pointer right-4 text-star-danger top-1/2"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          {children}
        </>
      </ReactModal>
    </>
  );
};

export default Modal;
