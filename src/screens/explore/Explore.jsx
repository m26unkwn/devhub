/** @format */

import React from "react";
import "./explore.css";

import { VideoCard, Button } from "../../components";
import { useVideos } from "../../context";
import { videoFilter } from "../../utils";

export const Explore = () => {
  const {
    videoState: { videos, filters },
  } = useVideos();

  const buttonTitle = [
    {
      title: "All Videos",
    },
    {
      title: "Javascript",
    },
    {
      title: "React",
    },
    {
      title: "Html",
    },
    {
      title: "Css",
    },
  ];

  const filteredVideos = videoFilter(videos, filters);
  console.log(filteredVideos);

  return (
    <div className='main-container'>
      <div className='explore-wrapper'>
        <div className='explore-category flex flex-gap'>
          {buttonTitle.map(({ title }) => (
            <Button key={title} title={title} />
          ))}
        </div>
        <div className='explore-card-wrapper'>
          {filteredVideos.length > 1 ? (
            filteredVideos.map((video) => (
              <VideoCard key={video.id} props={video} />
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
};
