/** @format */

import React from "react";
import "./explore.css";

import { VideoCard, Button } from "../../components";
import { useVideos } from "../../context";
import { useObserver } from "../../hooks";

const buttonTitle = [
  {
    title: "All Videos",
    param: "allvideos",
  },
  {
    title: "Javascript",
    param: "javascript",
  },
  {
    title: "React",
    param: "react",
  },
  {
    title: "Html",
    param: "html",
  },
  {
    title: "Css",
    param: "css",
  },
];

export const Explore = () => {
  const [loader, filteredVideos] = useObserver();
  const {
    videoState: { filters },
    videoDispatch,
  } = useVideos();

  const filterDispatch = (e, title) => {
    e.preventDefault();
    videoDispatch({ type: "ADD_FILTER", filter: title });
  };

  return (
    <div className='main-container'>
      <div className='explore-wrapper'>
        <div className='explore-category flex flex-gap'>
          {buttonTitle.map(({ title, param }) => (
            <Button
              key={title}
              title={title}
              filterDispatch={filterDispatch}
              filter={filters}
              param={param}
            />
          ))}
        </div>
        <div className='explore-card-wrapper'>
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <VideoCard key={video._id} props={video} />
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
        <div ref={loader}></div>
      </div>
    </div>
  );
};
