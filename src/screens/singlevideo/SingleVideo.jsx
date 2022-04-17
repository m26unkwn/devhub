/** @format */

import { Link, useLocation, useParams } from "react-router-dom";
import { useAxios, useHandler } from "../../hooks";
import ReactPlayer from "react-player";
import { ReactComponent as Playlist } from "../../assets/PaperPlus.svg";
import { ReactComponent as Like } from "../../assets/Like.svg";
import { ReactComponent as WatchLater } from "../../assets/TimeCircle.svg";
import { Loader } from "../../components";
import "./singleVideo.css";
import { useVideos } from "../../context";
import { isPresent } from "../../utils";

export const SingleVideo = () => {
  const { videoId } = useParams();

  const {
    videoState: { likes, watchLater },
  } = useVideos();
  const [singleVideo, Loading] = useAxios({
    method: "get",
    url: `/api/video/${videoId}`,
    property: "video",
  });
  const [loading, handlers] = useHandler();
  const location = useLocation();

  console.log(watchLater);

  const isVideoInLike = isPresent(likes, videoId);
  const isVideoInWatchLater = isPresent(watchLater, videoId);

  console.log({ isVideoInLike, isVideoInWatchLater });

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
                onPlay={() => handlers.addToHistory(singleVideo)}
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
                    disabled={loading}
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
                  <button className='btn btn-icon '>
                    <Playlist width='30px' height='30px' />
                  </button>
                  <p className='btn-title'>Save</p>
                </div>
                <div className='btn-wrapper flex-col ai-center jc-center'>
                  <button
                    disabled={loading}
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
        {Loading && <Loader />}
      </div>
    </div>
  );
};
