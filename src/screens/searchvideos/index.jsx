/** @format */

import { useLocation, Link } from "react-router-dom";
import { VideoCard } from "../../components/Cards/video";
import { queryFilter } from "../../utils";
import { useSelector } from "react-redux";

export const SearchVideos = () => {
  const videos = useSelector((store) => store.videos.videos);
  const { search } = useLocation();

  const searchParam = new URLSearchParams(search);

  const searchQuery = searchParam.get("query");

  const filteredVideos = queryFilter(videos, searchQuery);

  return (
    <main className='main-container'>
      {filteredVideos.length > 0 ? (
        <>
          <div className='category-wrapper flex jc-center'>
            <h4
              className='pd-desc'
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
              }}>
              Found videos for "{searchQuery}" ({filteredVideos.length})
            </h4>
          </div>

          <div className='explore-card-wrapper flex jc-center flex-gap flex-wrap'>
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} props={video} />
            ))}
          </div>
        </>
      ) : (
        <div
          className=' flex jc-center flex-col ai-center flex-gap'
          style={{ marginTop: "5rem" }}>
          <h3
            style={{
              fontSize: "2rem",
              textAlign: "center",
            }}
            className='pd-desc'>
            Sorry ! could not find any videos for {searchQuery}
          </h3>
          <h4
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
            className='pd-desc'>
            You can look for different videos
          </h4>
          <button className='btn'>
            <Link to='/explore' className='btn-link'>
              Explore
            </Link>
          </button>
        </div>
      )}
    </main>
  );
};
