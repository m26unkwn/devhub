/** @format */

import React from "react";

export const WatchLater = ({ videoPresent, addToWatchlater }) => {
  return (
    <div className=' input flex flex-gap ai-center'>
      <input
        type='checkbox'
        checked={videoPresent}
        onChange={addToWatchlater}
      />
      <label>Watch Later</label>
    </div>
  );
};
