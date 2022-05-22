/** @format */

import React from "react";
import { Card, Hero } from "../../components";
import { useVideos } from "../../context";
import { useHandler } from "../../hooks";
import "./likevideo.css";

export const LikeVideo = () => {
  const {
    videoState: { likes },
  } = useVideos();

  const [{ removeFromLike }] = useHandler();

  return (
    <div className='main-container'>
      <div className='like-wrapper'>
        {likes?.length > 0 ? (
          <>
            <Hero className='background-color' title='Your Liked Videos' />
            <div className='video-card-wrapper flex flex-col flex-gap'>
              {likes.map((video) => (
                <Card
                  key={video._id}
                  props={video}
                  removeHandler={removeFromLike}
                />
              ))}
            </div>
          </>
        ) : (
          <Hero
            className='background-color'
            title="You don't have any Like Video"
          />
        )}
      </div>
    </div>
  );
};
