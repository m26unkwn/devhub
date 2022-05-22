/** @format */

import { useState } from "react";
import "./videoCard.css";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../../assets/ElipsesIcon.svg";
import { Modal } from "../../Modal/Modal";
import { PlaylistModal } from "../../ActionModal/ActionModal";
import { useSelector } from "react-redux";

export const VideoCard = ({ props }) => {
  const [modal, setModal] = useState();
  const navigate = useNavigate();

  const token = useSelector((store) => store.auth.token);

  const { thumbnail, title, _id } = props;
  const openModal = () => {
    if (token) {
      setModal(!modal);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className=' video-card card-container flex flex-col '>
      <div className='video-thumbnail'>
        <Link to={`/explore/${_id}`}>
          <img src={thumbnail} alt={title} className='img-responsive' />
        </Link>
      </div>
      <div className='video-card-content flex ai-center flex-gap'>
        <div title={title} className='video-card-title'>
          <Link to={`/explore/${_id}`}>{title}</Link>
        </div>
        <div className='video-card-action '>
          <button onClick={openModal} className='btn btn-icon'>
            <MenuIcon />
          </button>
        </div>
      </div>
      {modal && (
        <Modal setState={setModal}>
          <PlaylistModal video={props} id={_id} closeModal={openModal} />
        </Modal>
      )}
    </div>
  );
};
