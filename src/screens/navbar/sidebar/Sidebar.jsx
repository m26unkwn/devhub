/** @format */

import React from "react";
import { NavLink, Link } from "react-router-dom";

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

import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className='sidebar-wrapper '>
      <div className='sidebar-content flex flex-col'>
        <div className='sidebar-head flex ai-center jc-start'>
          <NavLink to='/' className='flex'>
            <img src={Logo} alt='devhub_log' width='40px' height='40px' />
          </NavLink>
          <h1 className='sidebar-logo'>DevHub</h1>
        </div>
        <div className='sidebar-nav-content'>
          <div className='sidbar-nav-items'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? "sidebar-items nav-link-active " : "sidebar-items"
              }>
              <img src={Home} alt='home_icon' />
              <span className='nav-title'>Home</span>
            </NavLink>
            <NavLink
              to='/explore'
              className={({ isActive }) =>
                isActive ? "sidebar-items nav-link-active " : "sidebar-items"
              }>
              <img src={Explore} alt='home_icon' />
              <span className='nav-title'>Explore</span>
            </NavLink>
            <NavLink
              to='/playlist'
              className={({ isActive }) =>
                isActive ? "sidebar-items nav-link-active " : "sidebar-items"
              }>
              <img src={Playlist} alt='home_icon' />
              <span className='nav-title'>Playlist</span>
            </NavLink>
            <NavLink
              to='/likedvedios'
              className={({ isActive }) =>
                isActive ? "sidebar-items nav-link-active " : "sidebar-items"
              }>
              <img src={Like} width='24px' alt='home_icon' />
              <span className='nav-title'>Liked Vedios</span>
            </NavLink>
            <NavLink
              to='/watchlater'
              className={({ isActive }) =>
                isActive ? "sidebar-items nav-link-active " : "sidebar-items"
              }>
              <img src={WatchLater} alt='home_icon' />
              <span className='nav-title'>Watch Later</span>
            </NavLink>
            <NavLink
              to='/history'
              className={({ isActive }) =>
                isActive ? "sidebar-items nav-link-active " : "sidebar-items"
              }>
              <img src={History} alt='home_icon' />
              <span className='nav-title'>History</span>
            </NavLink>
          </div>
        </div>
        <div className='sidebar-user'>
          <Link to='/profile' className='sidebar-items'>
            <img src={Profile} alt='home_icon' />
            <span className='nav-title'>Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
