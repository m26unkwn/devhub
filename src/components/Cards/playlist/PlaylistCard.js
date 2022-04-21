/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./playlistcard.css";
export const PlaylistCard = ({ props }) => {
  console.log("hello");
  return (
    <Link to={`/playlist/${props._id}`}>
      <div className='playlist-card card-container'>{props.title}</div>
    </Link>
  );
};
