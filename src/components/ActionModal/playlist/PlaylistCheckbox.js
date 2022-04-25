/** @format */

import React from "react";
import { useHandler } from "../../../hooks";
import { isPresent } from "../../../utils";

export const PlaylistCheckbox = ({ playlist, video }) => {
  const [handlers] = useHandler();

  const isVideoPresent = isPresent(playlist.videos, video._id);

  const handlePlaylist = (e) => {
    if (!e.target.checked) {
      return handlers.removeVideofromPlaylist(playlist._id, video._id);
    } else {
      return handlers.addVideoIntoPlaylist(playlist._id, video);
    }
  };
  return (
    <div className='input flex flex-gap ai-center'>
      <label className='input'>
        <input
          type='checkbox'
          checked={isVideoPresent}
          onChange={handlePlaylist}
        />
        <span> {playlist.title}</span>
      </label>
    </div>
  );
};
