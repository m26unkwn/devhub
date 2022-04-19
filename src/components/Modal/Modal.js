/** @format */

import "./modal.css";

export const Modal = ({ children, setState }) => {
  const closeModal = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      setState(false);
    }
  };
  return (
    <div
      className='modal-backdrop flex ai-center jc-center'
      onClick={(e) => closeModal(e)}>
      {children}
    </div>
  );
};
