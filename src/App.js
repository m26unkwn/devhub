/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";

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

function App() {
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
