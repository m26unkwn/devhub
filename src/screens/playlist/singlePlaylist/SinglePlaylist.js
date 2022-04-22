/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../context";
import { Card } from "../../../components";
import { usePlaylistAxios, useHandler } from "../../../hooks";

export const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const {
    authState: { token },
  } = useAuth();

  const [handlers] = useHandler();

  const headers = { authorization: token };

  const [singlePlaylist] = usePlaylistAxios({
    method: "get",
    url: `/api/user/playlists/${playlistId}`,
    property: "playlist",
    headers: headers,
  });

  return (
    <div className='main-container'>
      <div className='playlist-wrapper'>
        {singlePlaylist && (
          <>
            <div className='playlist-head flex jc-between ai-center'>
              <h1>{singlePlaylist.title}</h1>
              <button
                onClick={() => handlers.removePlaylist(singlePlaylist._id)}
                className='btn'>
                Delete Playlist
              </button>
            </div>
            <div className='playlist-card-wrapper'>
              {singlePlaylist.videos.length > 0 ? (
                singlePlaylist.videos.map((video) => (
                  <Card
                    key={video._id}
                    props={video}
                    removeHandler={handlers.removeVideofromPlaylist}
                    playlistId={singlePlaylist._id}
                  />
                ))
              ) : (
                <h1 className='no-playlist flex jc-center'>
                  You don't have any Video In this Playlist.
                </h1>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
