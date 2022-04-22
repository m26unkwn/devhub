/** @format */

import React from "react";
import { useState } from "react";
import { useVideos } from "../../../context";
import { CreatePlaylist } from "../createPlaylist/CreatePlaylist";
import { PlaylistCheckbox } from "./PlaylistCheckbox";

export const Playlist = ({ video }) => {
  const [createPlaylist, setCreatePlaylist] = useState(false);

  const {
    videoState: { playlists },
  } = useVideos();

  const openCreatePlaylist = () => {
    setCreatePlaylist(!createPlaylist);
  };

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
        <CreatePlaylist />
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
