/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { videoFilter, firstCapital } from "../../utils";
import { VideoCard } from "../../components";
import "./categorySection.css";
import { useSelector } from "react-redux";

export const Category = () => {
  const { categoryName } = useParams();
  const videos = useSelector((store) => store.videos.videos);

  const filteredVideos = videoFilter(videos, categoryName);

  const capitalCategoryName = firstCapital(categoryName);

  return (
    <div className='main-container'>
      <div className='category-container'>
        <div className='category-head'>
          <h1>
            {capitalCategoryName} all videos ({filteredVideos.length})
          </h1>
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
