/** @format */

import React from "react";

export const WatchLater = ({ videoPresent, handleWatchlater }) => {
  return (
    <div className='  flex flex-gap ai-center'>
      <label className='input'>
        <input
          type='checkbox'
          checked={videoPresent}
          onChange={handleWatchlater}
        />
        <span> Watch Later</span>
      </label>
    </div>
  );
};
