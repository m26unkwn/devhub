/** @format */

import React from "react";

export const PlaylistCheckbox = ({ playlist }) => {
  console.log(playlist);
  return (
    <div className='input flex flex-gap ai-center'>
      <input type='checkbox' checked={false} />
      <label>{playlist.title}</label>
    </div>
  );
};
