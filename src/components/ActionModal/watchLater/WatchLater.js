/** @format */

import React from "react";

export const WatchLater = ({ videoPresent, handleWatchlater }) => {
  return (
    <div className=' input flex flex-gap ai-center'>
      <input
        type='checkbox'
        checked={videoPresent}
        onChange={handleWatchlater}
      />
      <label>Watch Later</label>
    </div>
  );
};
