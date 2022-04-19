/** @format */

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { useToast, useVideos } from "./context";
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
  SingleVideo,
  Signup,
  Login,
} from "./screens";
import { PrivateRoute, Toast, Loader } from "./components";

let videoConfig = {
  method: "get",
  url: "/api/videos",
  property: "videos",
};

function App() {
  const { videoDispatch } = useVideos();

  const { toast, loading } = useToast();

  const [videos] = useAxios(videoConfig);

  useEffect(() => {
    if (videos) {
      videoDispatch({ type: "ADD_VIDEOS", videos: videos });
    }
  }, [videoDispatch, videos]);

  return (
    <div className='main-grid-container'>
      <Navbar />
      {toast.toast && <Toast />}
      {loading && <Loader />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/playlist'
          element={
            <PrivateRoute>
              <Playlist />
            </PrivateRoute>
          }
        />
        <Route
          path='/likedvedios'
          element={
            <PrivateRoute>
              <LikeVideo />
            </PrivateRoute>
          }
        />
        <Route
          path='/history'
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route
          path='/watchlater'
          element={
            <PrivateRoute>
              <WatchLater />
            </PrivateRoute>
          }
        />
        <Route
          path='/Profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path='/explore/:videoId' element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
