/** @format */

import React from "react";

export const Like = ({ videoPresent, handleLike }) => {
  return (
    <div className=' input flex flex-gap ai-center'>
      <input type='checkbox' checked={videoPresent} onChange={handleLike} />
      <label>Like</label>
    </div>
  );
};
