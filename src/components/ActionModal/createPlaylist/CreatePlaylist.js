/** @format */

import React, { useState } from "react";
import { useHandler } from "../../../hooks";

export const CreatePlaylist = ({ closeModal, setModal }) => {
  const [playlist, setPlaylist] = useState({
    title: "",
  });

  const [handlers] = useHandler();

  const onCreatePlaylist = (e) => {
    setPlaylist({ title: e.target.value });
  };

  const createThePlaylist = () => {
    if (closeModal) {
      setModal(false);
    }
    setPlaylist({
      title: "",
    });
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
