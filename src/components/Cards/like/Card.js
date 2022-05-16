/** @format */

import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { ReactComponent as Delete } from "../../../assets/Delete.svg";

export const Card = ({ props, loading, removeHandler, playlistId }) => {
  const { thumbnail, title, _id, category } = props;

  return (
    <div className=' all-card  flex flex-gap '>
      <div className='all-thumbnail'>
        <Link to={`/explore/${_id}`}>
          <img src={thumbnail} alt={title} className='img-responsive' />
        </Link>
      </div>
      <div className='all-card-content flex   flex-gap flex-col'>
        <div title={title} className='all-card-title'>
          <Link to={`/explore/${_id}`}>{title}</Link>
        </div>
        <p className='card-desc'>{category}</p>
      </div>
      {removeHandler && (
        <div className='all-card-action '>
          <button
            disabled={loading}
            onClick={() =>
              playlistId ? removeHandler(playlistId, _id) : removeHandler(_id)
            }
            className='btn btn-icon'>
            <Delete />
          </button>
        </div>
      )}
    </div>
  );
};
