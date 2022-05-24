/** @format */

import React, { useState } from "react";
import { useHandler } from "../../../hooks";
import { v4 as uuid } from "uuid";

export const CreatePlaylist = ({ closeModal, setModal, video }) => {
  const [playlist, setPlaylist] = useState({
    title: "",
    id: "",
  });

  const [handlers] = useHandler();

  const onCreatePlaylist = (e) => {
    setPlaylist({ title: e.target.value, id: uuid() });
  };

  const createThePlaylist = () => {
    if (closeModal) {
      setModal(false);
    }
    setPlaylist({
      title: "",
    });
    if (video) {
      return handlers.createPlaylist(playlist, video);
    }
    return handlers.createPlaylist(playlist);
  };

  return (
    <div className='input-field create-playlist'>
      <input
        type='text'
        autoFocus
        value={playlist.title}
        placeholder='Enter Playlist'
        onChange={onCreatePlaylist}
      />
      <button
        disabled={!playlist.title.trim("")}
        onClick={createThePlaylist}
        className={!playlist.title.trim("") ? "btn btn-disabled" : "btn"}>
        Create
      </button>
    </div>
  );
};
