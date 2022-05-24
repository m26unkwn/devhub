/** @format */

import React from "react";
import { Hero, Card } from "../../components";
import { useHandler } from "../../hooks";
import { useSelector } from "react-redux";

export const History = () => {
  const history = useSelector((store) => store.videos.history);

  const [handlers] = useHandler();

  return (
    <div className='main-container'>
      <div className='watchlater-wrapper'>
        {history?.length > 0 ? (
          <>
            <Hero className='background-color' title='History' />
            <div className='clear flex jc-end'>
              <button onClick={handlers.clearAllHistory} className='btn'>
                Clear History
              </button>
            </div>

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
