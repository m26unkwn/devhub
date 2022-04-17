/** @format */

import { createContext, useState, useContext } from "react";

let Toast = createContext();

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    toast: false,
    toastVarient: "",
    message: "",
  });
  let value = {
    toast,
    setToast,
  };
  return <Toast.Provider value={value}>{children}</Toast.Provider>;
};

const useToast = () => useContext(Toast);
export { ToastProvider, useToast };
