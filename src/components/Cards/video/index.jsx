/** @format */

import React, { useState } from "react";
import "./videoCard.css";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../../assets/ElipsesIcon.svg";
import { Modal } from "../../Modal/Modal";
import { useModal } from "../../../context";

export const VideoCard = ({ props }) => {
  const { modal, openModal } = useModal();

  const { thumbnail, title, _id } = props;

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
          <button onClick={openModal} className='btn btn-icon'>
            <MenuIcon />
          </button>
        </div>
      </div>
      {modal && <Modal>Modal</Modal>}
    </div>
  );
};
