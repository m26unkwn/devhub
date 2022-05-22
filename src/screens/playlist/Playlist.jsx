/** @format */

import React, { useState } from "react";
import { PlaylistCard, CreatePlaylist, Modal } from "../../components";
import "./playlist.css";
import { useSelector } from "react-redux";

export const Playlist = () => {
  const [modal, setModal] = useState();

  const playlists = useSelector((store) => store.playlist);
  const openModal = () => {
    setModal(!modal);
  };
  return (
    <div className='main-container'>
      <div className='playlist-wrapper'>
        <div className='playlist-head flex jc-between ai-center'>
          <h1>Playlist</h1>
          <button className='btn' onClick={openModal}>
            Create Playlist
          </button>
        </div>
        <div className='playlist-card-wrapper'>
          {playlists.length > 0 ? (
            playlists.map((playlist) => (
              <PlaylistCard key={playlist._id} props={playlist} />
            ))
          ) : (
            <h1 className='no-playlist flex jc-center'>
              You don't have any Playlist.
            </h1>
          )}
        </div>
      </div>
      {modal && (
        <Modal setState={setModal}>
          <div className='create-playlist-modal card-container'>
            <div style={{ padding: "1rem" }}>
              <h1>Create Playlist</h1>
              <CreatePlaylist closeModal={true} setModal={setModal} />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
