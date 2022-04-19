/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

import {
  Logo,
  Home,
  Explore,
  Playlist,
  Like,
  WatchLater,
  History,
  Profile,
} from "../../../assets";

import "./mobile.css";

export const MobileNav = () => {
  return (
    <div className='mobile-wrapper '>
      <div className='mobile-content flex'>
        <div className='mobile-nav-content'>
          <div className='mobile-nav-items flex flex-row jc-center'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? "mobile-items mobile-link-active " : "mobile-items"
              }>
              <img src={Home} alt='home_icon' />
              <span className='nav-title'>Home</span>
            </NavLink>
            <NavLink
              to='/explore'
              className={({ isActive }) =>
                isActive ? "mobile-items mobile-link-active " : "mobile-items"
              }>
              <img src={Explore} alt='home_icon' />
              <span className='nav-title'>Explore</span>
            </NavLink>
            <NavLink
              to='/playlist'
              className={({ isActive }) =>
                isActive ? "mobile-items mobile-link-active " : "mobile-items"
              }>
              <img src={Playlist} alt='home_icon' />
              <span className='nav-title'>Playlist</span>
            </NavLink>
            <NavLink
              to='/likedvedios'
              className={({ isActive }) =>
                isActive ? "mobile-items mobile-link-active " : "mobile-items"
              }>
              <img src={Like} width='24px' alt='home_icon' />
              <span className='nav-title'>Liked Videos</span>
            </NavLink>
            <NavLink
              to='/watchlater'
              className={({ isActive }) =>
                isActive ? "mobile-items mobile-link-active " : "mobile-items"
              }>
              <img src={WatchLater} alt='home_icon' />
              <span className='nav-title'>Watch Later</span>
            </NavLink>
            <NavLink
              to='/history'
              className={({ isActive }) =>
                isActive ? "mobile-items mobile-link-active " : "mobile-items"
              }>
              <img src={History} alt='home_icon' />
              <span className='nav-title'>History</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
