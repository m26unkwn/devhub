/** @format */

import React from "react";
import { useState } from "react";
import { useVideos } from "../../context";
import "./playlistModal.css";
import { useHandler } from "../../hooks";
import { ReactComponent as CloseIcon } from "../../assets/Close.svg";
import { isPresent } from "../../utils";
import { WatchLater } from "./watchLater/WatchLater";
import { Like } from "./Likes/Like";

export const PlaylistModal = ({ video, id, closeModal }) => {
  const {
    videoState: { playlist, watchLater, likes },
  } = useVideos();

  const [loading, handlers] = useHandler();

  const [createPlaylist, setCreatePlaylist] = useState(false);

  const opeCreatePlaylist = () => {
    setCreatePlaylist((prev) => !prev);
  };

  const addToWatchlater = (e) => {
    if (!e.target.checked) {
      return handlers.removeFromWatchLater(id);
    } else {
      return handlers.addToWatchLater(video);
    }
  };

  let videoPresent = isPresent(watchLater, id);

  const addToLike = (e) => {
    if (!e.target.checked) {
      return handlers.removeFromLike(id);
    } else {
      return handlers.addToLike(video);
    }
  };

  let isVideoInLike = isPresent(likes, id);

  return (
    <div className='playlist-modal card-container'>
      <div className='card-head'>
        <b>Save to</b>
        <button className='close-modal' onClick={closeModal}>
          <CloseIcon fill='black' />
        </button>
      </div>
      <div className='card-divider'></div>
      <div className='card-content flex flex-gap flex-col'>
        <WatchLater
          videoPresent={videoPresent}
          addToWatchlater={addToWatchlater}
        />
        <Like videoPresent={isVideoInLike} addToLike={addToLike} />
      </div>

      <div className='card-action flex jc-center'>
        <button className='btn ' onClick={opeCreatePlaylist}>
          CREATE PLAYLIST
        </button>
      </div>
    </div>
  );
};
