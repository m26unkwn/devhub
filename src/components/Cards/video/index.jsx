/** @format */

import React, { useState } from "react";
import "./videoCard.css";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../../assets/ElipsesIcon.svg";
import { Modal } from "../../Modal/Modal";

export const VideoCard = ({ props }) => {
  const [openModal, setOpenModal] = useState(false);

  const { thumbnail, title, _id } = props;

  const openTheModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className=' video-card card-container flex flex-col '>
      <div className='video-thumbnail'>
        <Link to={`/explore/${_id}`}>
          <img src={thumbnail} alt={title} className='img-responsive' />
        </Link>
      </div>
      <div className='video-card-content flex ai-center flex-gap'>
        <div className='video-card-title'>
          <Link to={`/explore/${_id}`}>{title}</Link>
        </div>
        <div className='video-card-action '>
          <button onClick={openTheModal} className='btn btn-icon'>
            <MenuIcon />
          </button>
        </div>
      </div>
      {openModal && <Modal>Modal</Modal>}
    </div>
  );
};
