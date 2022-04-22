/** @format */

import React from "react";
import { useVideos } from "../../context";
import { Hero, Card } from "../../components";
import { useHandler } from "../../hooks";

export const History = () => {
  const {
    videoState: { history },
  } = useVideos();

  const [handlers] = useHandler();

  return (
    <div className='main-container'>
      <div className='watchlater-wrapper'>
        {history && history.length > 0 ? (
          <>
            <Hero className='background-color' title='History' />
            <div className='video-card-wrapper flex flex-col flex-gap'>
              {history.map((video) => (
                <Card
                  key={video._id}
                  props={video}
                  removeHandler={handlers.removeFromHistory}
                />
              ))}
            </div>
          </>
        ) : (
          <Hero
            className='background-color'
            title="You don't have any History"
          />
        )}
      </div>
    </div>
  );
};
