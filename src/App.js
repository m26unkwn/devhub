/** @format */

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { useToast } from "./context";
import { useAxios } from "./hooks";
import { authAction } from "./store/auth-slice";
import { videoAction } from "./store/video-slice";
import { playlistAction } from "./store/playlist-slice";
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
  SinglePlaylist,
  Category,
  SearchVideos,
  RouteError,
  CreatorPage,
} from "./screens";
import { PrivateRoute, Toast, Loader } from "./components";
import { useDispatch } from "react-redux";

let videoConfig = {
  method: "get",
  url: "/api/videos",
  property: "videos",
};

let userData = JSON.parse(localStorage.getItem("userData"));

function App() {
  const dispatch = useDispatch();

  const { toast, loading } = useToast();

  const [videos] = useAxios(videoConfig);

  useEffect(() => {
    if (videos) {
      dispatch(videoAction.addVideos(videos));
    }
  }, [dispatch, videos]);

  useEffect(
    () => {
      if (userData) {
        dispatch(authAction.addToken(userData.token));
        dispatch(
          authAction.addUserDetails({
            firstName: userData.foundUser.firstName,
            email: userData.foundUser.email,
            lastName: userData.foundUser.lastName,
          }),
        );
        dispatch(videoAction.addToLike(userData.foundUser.likes));
        dispatch(videoAction.addToHistory(userData.foundUser.history));
        dispatch(videoAction.addToWatchLater(userData.foundUser.watchlater));
        dispatch(playlistAction.addPlaylist(userData.foundUser.playlist));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className='main-grid-container'>
      <Navbar />
      {toast.toast && <Toast />}
      {loading && <Loader />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/explore/search' element={<SearchVideos />} />
        <Route path='/explore/:videoId' element={<SingleVideo />} />
        <Route path='/channel/:creatorId' element={<CreatorPage />} />
        <Route path='*' element={<RouteError />} />
        <Route
          path='/playlist'
          element={
            <PrivateRoute>
              <Playlist />
            </PrivateRoute>
          }
        />
        <Route
          path='/playlist/:playlistId'
          element={
            <PrivateRoute>
              <SinglePlaylist />
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
      </Routes>
    </div>
  );
}

export default App;
