/** @format */

import React from "react";

export const Like = ({ videoPresent, addToLike }) => {
  return (
    <div className=' input flex flex-gap ai-center'>
      <input type='checkbox' checked={videoPresent} onChange={addToLike} />
      <label>Like</label>
    </div>
  );
};
