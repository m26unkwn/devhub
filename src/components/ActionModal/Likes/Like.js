/** @format */

import React from "react";

export const Like = ({ videoPresent, handleLike }) => {
  return (
    <div className='  flex flex-gap ai-center'>
      <label className='input'>
        <input type='checkbox' checked={videoPresent} onChange={handleLike} />
        <span>Like</span>
      </label>
    </div>
  );
};
