/** @format */

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { useVideos } from "./context";
import { useAxios } from "./hooks";

import {
  Navbar,
  Home,
  Explore,
  Playlist,
  LikeVideo,
  History,
  WatchLater,
  Profile,
} from "./screens";

let videoConfig = {
  method: "get",
  url: "/api/videos",
  property: "videos",
};

function App() {
  const { videoDispatch } = useVideos();

  const [videos] = useAxios(videoConfig);

  useEffect(() => {
    if (videos) {
      videoDispatch({ type: "ADD_VIDEOS", videos: videos });
    }
  }, [videoDispatch, videos]);

  return (
    <div className='main-grid-container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/likedvedios' element={<LikeVideo />} />
        <Route path='/history' element={<History />} />
        <Route path='/watchlater' element={<WatchLater />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
