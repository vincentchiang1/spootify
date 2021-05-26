import React from 'react';
import Logo from './images/spootify-logo.png';
import ArtistLogo from './images/artist-icon.png';
import TracksLogo from './images/top-icon.png';
import RecentLogo from './images/recent-icon.png';

export default function Sidebar() {
  return (
    <div className="nav-sidebar">
      <a className="navbar-icons">
        <img className="icon-images" id="logo" src={Logo} alt="spootify" />
      </a>
      <a className="navbar-icons" id="artists-button" href="#">
        <img className="icon-images" src={ArtistLogo} alt="artist" />
        <span className="navbar-labels">Top Artists</span>
      </a>
      <a className="navbar-icons" id="tracks-button" href="#">
        <img className="icon-images" src={TracksLogo} alt="tracks" />
        <span className="navbar-labels">Top Tracks</span>
      </a>
      <a className="navbar-icons" id="recent-button" href="#">
        <img className="icon-images" src={RecentLogo} alt="recent" />
        <span className="navbar-labels">Recent</span>
      </a>
    </div>
  );
}
