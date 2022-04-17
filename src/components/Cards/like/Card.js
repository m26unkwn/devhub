/** @format */

import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { ReactComponent as Delete } from "../../../assets/Delete.svg";

export const Card = ({ props, loading, removeHandler }) => {
  const { thumbnail, title, _id } = props;
  console.log({ _id, removeHandler });

  return (
    <div className=' all-card  flex flex-gap '>
      <div className='all-thumbnail'>
        <Link to={`/explore/${_id}`}>
          <img src={thumbnail} alt={title} className='img-responsive' />
        </Link>
      </div>
      <div className='all-card-content flex  jc-between flex-gap'>
        <div className='all-card-title'>
          <Link to={`/explore/${_id}`}>{title}</Link>
        </div>
      </div>
      <div className='all-card-action '>
        <button
          disabled={loading}
          onClick={() => removeHandler(_id)}
          className='btn btn-icon'>
          <Delete />
        </button>
      </div>
    </div>
  );
};
