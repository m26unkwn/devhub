/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components";

import "./creatorpage.css";
import { useSelector } from "react-redux";

export const CreatorPage = () => {
  const { creatorId } = useParams();
  const videos = useSelector((store) => store.videos.videos);
  const channelVideos = videos.filter(
    (video) => video.creator.toLowerCase() === creatorId.toLocaleLowerCase(),
  );

  return (
    <div className='main-container'>
      <section className='cover-wrapper'>
        <div className='cover-title'>
          <h1 className='cover-title-head flex jc-center'>{creatorId}</h1>
        </div>
        <div className='video-card-wrapper flex flex-col flex-gap'>
          {channelVideos.map((video) => (
            <Card key={video._id} props={video} />
          ))}
        </div>
      </section>
    </div>
  );
};
