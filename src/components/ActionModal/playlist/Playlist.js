/** @format */

import React from "react";
import { useState } from "react";
import { useVideos } from "../../../context";
import { useHandler } from "../../../hooks";
import { PlaylistCheckbox } from "./PlaylistCheckbox";

export const Playlist = ({ video }) => {
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const [handlers] = useHandler();
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
  console.log("playlist", playlists);
  return (
    <>
      {playlists.length > 0 &&
        playlists.map((playlist) => (
          <PlaylistCheckbox
            key={playlist._id}
            playlist={playlist}
            video={video}
          />
        ))}
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
