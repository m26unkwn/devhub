/** @format */

import "./modal.css";
import { useVideos } from "../../context";

export const Modal = ({ children }) => {
  return (
    <div className='modal-backdrop flex ai-center jc-center'>{children}</div>
  );
};
