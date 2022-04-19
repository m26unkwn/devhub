/** @format */

import React from "react";
import { Card, Hero } from "../../components";
import { useVideos } from "../../context";
import { useHandler } from "../../hooks";
import "./watchlater.css";

export const WatchLater = () => {
  const {
    videoState: { watchLater },
  } = useVideos();

  const [handlers] = useHandler();

  return (
    <div className='main-container'>
      <div className='watchlater-wrapper'>
        {watchLater.length > 0 ? (
          <>
            <Hero
              className='background-color'
              title='Your Watch Later Videos'
            />
            <div className='video-card-wrapper flex flex-col flex-gap'>
              {watchLater.map((video) => (
                <Card
                  key={video._id}
                  props={video}
                  removeHandler={handlers.removeFromWatchLater}
                />
              ))}
            </div>
          </>
        ) : (
          <Hero
            className='background-color'
            title="You don't have any Watch Later Videos"
          />
        )}
      </div>
    </div>
  );
};
