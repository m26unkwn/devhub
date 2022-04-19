/** @format */

import { createContext, useState, useContext } from "react";

let Toast = createContext();

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    toast: false,
    toastVarient: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  let value = {
    toast,
    setToast,
    loading,
    setLoading,
  };
  return <Toast.Provider value={value}>{children}</Toast.Provider>;
};

const useToast = () => useContext(Toast);
export { ToastProvider, useToast };
