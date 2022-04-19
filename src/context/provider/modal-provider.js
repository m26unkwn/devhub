/** @format */

import { createContext, useState, useContext } from "react";

let Modal = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(modal);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
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
