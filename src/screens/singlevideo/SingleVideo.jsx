/** @format */

import "./singleVideo.css";

import { useState } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useAxios, useHandler } from "../../hooks";
import { useAuth, useVideos } from "../../context";

import ReactPlayer from "react-player";

import { ReactComponent as PlaylistIcon } from "../../assets/PaperPlus.svg";
import { ReactComponent as Like } from "../../assets/Like.svg";
import { ReactComponent as WatchLater } from "../../assets/TimeCircle.svg";
import { ReactComponent as CloseIcon } from "../../assets/Close.svg";

import { isPresent } from "../../utils";
import { Modal, Playlist } from "../../components";

export const SingleVideo = () => {
  const { videoId } = useParams();

  const {
    videoState: { likes, watchLater },
  } = useVideos();

  const {
    authState: { token },
  } = useAuth();

  const [singleVideo] = useAxios({
    method: "get",
    url: `/api/video/${videoId}`,
    property: "video",
  });

  const [handlers] = useHandler();

  const location = useLocation();
  const navigate = useNavigate();

  const isVideoInLike = isPresent(likes, videoId);
  const isVideoInWatchLater = isPresent(watchLater, videoId);

  const [modal, setModal] = useState();

  const openModal = () => {
    if (token) setModal(!modal);
    else {
      navigate("/login", { state: { location } });
    }
  };

  return (
    <div className='main-container'>
      <div className='video-wrapper'>
        {singleVideo && (
          <>
            <div className='video-player'>
              <ReactPlayer
                className='react-player'
                url={`https://www.youtube.com/watch?v=${videoId}`}
                width='100%'
                height='100%'
                controls
                onStart={() => handlers.addToHistory(singleVideo)}
              />
            </div>
            <div className='video-content'>
              <div className='video-head flex flex-col '>
                <h2 className='video-title'>{singleVideo.title}</h2>
                <p className='video-views'>{singleVideo.views} views</p>
              </div>
              <div className='video-action flex jc-between'>
                <div className='btn-wrapper flex-col ai-center jc-center'>
                  <button
                    onClick={() =>
                      isVideoInLike
                        ? handlers.removeFromLike(videoId)
                        : handlers.addToLike(singleVideo, location)
                    }
                    className='btn btn-icon'>
                    <Like
                      fill={isVideoInLike ? "var(--danger-color)" : "none"}
                      width='30px'
                      height='30px'
                      stroke='white'
                    />
                  </button>
                  <p className='btn-title'>
                    {isVideoInLike ? "Liked" : "Like"}
                  </p>
                </div>
                <div className='btn-wrapper flex-col ai-center jc-center'>
                  <button onClick={openModal} className='btn btn-icon '>
                    <PlaylistIcon width='30px' height='30px' />
                  </button>
                  <p className='btn-title'>Save</p>
                </div>
                <div className='btn-wrapper flex-col ai-center jc-center'>
                  <button
                    onClick={() =>
                      isVideoInWatchLater
                        ? handlers.removeFromWatchLater(videoId)
                        : handlers.addToWatchLater(singleVideo, location)
                    }
                    className='btn btn-icon'>
                    <WatchLater
                      fill={
                        isVideoInWatchLater ? "var(--primary-color)" : "none"
                      }
                      width='30px'
                      height='30px'
                    />
                  </button>
                  <p className='btn-title'>Watch Later</p>
                </div>
              </div>
              <div className='video-creator flex  ai-center flex-gap'>
                <Link to={`/channel/${singleVideo.creator}`}>
                  <img
                    className='avatar'
                    src={singleVideo.creatorProfile}
                    alt='profile'
                  />
                </Link>
                <Link to={`/channel/${singleVideo.creator}`}>
                  <h4>{singleVideo.creator}</h4>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      {modal && (
        <Modal setState={setModal}>
          <div className='playlist-modal card-container '>
            <div className='card-head'>
              <b>Save to</b>
              <button className='close-modal' onClick={openModal}>
                <CloseIcon fill='rgb(63, 63, 63)' />
              </button>
            </div>
            <div className='card-divider'></div>
            <div className='card-content flex flex-gap flex-col'>
              <Playlist video={singleVideo} />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
