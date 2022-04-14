/** @format */

import React from "react";
import "./videoCard.css";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../../assets/ElipsesIcon.svg";

export const VideoCard = ({ props }) => {
  const { thumbnail, title, id } = props;
  return (
    <div className=' video-card card-container flex flex-col '>
      <div className='video-thumbail'>
        <Link to={`/explore/${id}`}>
          <img src={thumbnail} alt={title} className='img-responsive' />
        </Link>
      </div>
      <div className='video-card-content flex ai-center flex-gap'>
        <div className='video-card-title'>
          <Link to={`/explore/${id}`}>{title}</Link>
        </div>
        <div className='video-card-action '>
          <button className='btn btn-icon'>
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
