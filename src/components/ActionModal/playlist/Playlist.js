/** @format */

import React from "react";
import { useState } from "react";
import { useVideos } from "../../../context";
import { useHandler } from "../../../hooks";
import { PlaylistCheckbox } from "./PlaylistCheckbox";

export const Playlist = () => {
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const [loading, handlers] = useHandler();
  const [playlist, setPlaylist] = useState({
    title: "",
  });
  const {
    videoState: { playlists },
  } = useVideos();

  const openCreatePlaylist = () => {
    setCreatePlaylist(!createPlaylist);
  };

  const onCreatePlaylist = (e) => {
    setPlaylist({ title: e.target.value });
  };

  const createThePlaylist = () => {
    setCreatePlaylist(false);
    return handlers.createPlaylist(playlist);
  };
  console.log(playlists);
  return (
    <>
      {playlists.length > 1 &&
        playlists.map((playlist) => <PlaylistCheckbox playlist={playlist} />)}
      {createPlaylist ? (
        <div className='input-field create-playlist'>
          <input type='text' onChange={onCreatePlaylist} />
          <button
            disabled={!playlist.title.trim("")}
            onClick={createThePlaylist}
            className={!playlist.title.trim("") ? "btn btn-disabled" : "btn"}>
            Create
          </button>
        </div>
      ) : (
        <div className='card-action flex jc-center'>
          <button className='btn ' onClick={openCreatePlaylist}>
            CREATE PLAYLIST
          </button>
        </div>
      )}
    </>
  );
};
