/** @format */

import { useEffect } from "react";
import { useToast } from "../../context";
import "./toast.css";
import { ReactComponent as CloseIcon } from "../../assets/Close.svg";

export const Toast = () => {
  const { toast, setToast } = useToast();

  const hideToast = () => {
    setToast({ toast: false });
  };

  useEffect(() => {
    if (toast.toast) {
      let timer = setTimeout(() => setToast({ toast: false }), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.toast, setToast]);

  return (
    <div className={`toast toast-${toast.toastVarient} toast-position`}>
      {toast.message}
      <button onClick={hideToast}>
        <CloseIcon />
      </button>
    </div>
  );
};
