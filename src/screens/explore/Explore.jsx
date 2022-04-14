/** @format */

import React from "react";
import "./explore.css";

import { VideoCard, Button } from "../../components";
import { useVideos } from "../../context";
import { videoFilter } from "../../utils";

export const Explore = () => {
  const {
    videoState: { videos, filters },
    videoDispatch,
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

  const filterDispatch = (e, title) => {
    e.preventDefault();
    videoDispatch({ type: "ADD_FILTER", filter: title.toLowerCase() });
  };

  return (
    <div className='main-container'>
      <div className='explore-wrapper'>
        <div className='explore-category flex flex-gap'>
          {buttonTitle.map(({ title }) => (
            <Button
              key={title}
              title={title}
              filterDispatch={filterDispatch}
              filter={filters}
            />
          ))}
        </div>
        <div className='explore-card-wrapper'>
          {filteredVideos.length > 0 ? (
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
