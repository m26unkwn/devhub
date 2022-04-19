/** @format */

import { useEffect } from "react";
import { useToast } from "../../context";
import "./toast.css";

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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24px'
          height='24px'
          viewBox='0 0 24 24'
          role='presentation'>
          <g transform='translate(2 1.999)'>
            <path
              d='M14.34,20H5.67C2.279,20,0,17.625,0,14.091V5.92C0,2.379,2.279,0,5.67,0h8.67C17.725,0,20,2.379,20,5.92v8.171C20,17.625,17.725,20,14.34,20ZM10,11.231h0L11.78,13a.815.815,0,0,0,.61.261A.873.873,0,0,0,13.01,13a.869.869,0,0,0,0-1.228l-1.78-1.78L13.01,8.21a.875.875,0,0,0-.616-1.494.89.89,0,0,0-.624.256L10,8.75,8.22,6.971A.89.89,0,0,0,7.6,6.716.876.876,0,0,0,6.98,8.21L8.76,9.991,6.98,11.761a.88.88,0,0,0,.619,1.5A.873.873,0,0,0,8.22,13L10,11.232Z'
              transform='translate(0 0)'
              fill='#ffff'></path>
          </g>
        </svg>
      </button>
    </div>
  );
};