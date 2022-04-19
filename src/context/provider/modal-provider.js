/** @format */

import { createContext, useState, useContext } from "react";

let Modal = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
    console.log("hello");
  };
  const closeModal = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      setModal(false);
    }
  };
  let value = {
    openModal,
    closeModal,
    modal,
    setModal,
  };
  return <Modal.Provider value={value}>{children}</Modal.Provider>;
};

const useModal = () => useContext(Modal);
export { ModalProvider, useModal };
