import React from 'react';
import Logo from './images/spootify-logo.png';
import ArtistLogo from './images/artist-icon.png';
import TracksLogo from './images/top-icon.png';
import RecentLogo from './images/recent-icon.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="nav-sidebar">
      <a className="navbar-icons">
        <img className="icon-images" id="logo" src={Logo} alt="spootify" />
      </a>
      <Link to="/home/artists" className="navbar-icons" id="artists-button">
        <img className="icon-images" src={ArtistLogo} alt="artist" />
        <span className="navbar-labels">Top Artists</span>
      </Link>
      <Link to="/home/top-tracks" className="navbar-icons" id="tracks-button">
        <img className="icon-images" src={TracksLogo} alt="tracks" />
        <span className="navbar-labels">Top Tracks</span>
      </Link>
      <Link to="/home/recent" className="navbar-icons" id="recent-button">
        <img className="icon-images" src={RecentLogo} alt="recent" />
        <span className="navbar-labels">Recent</span>
      </Link>
    </div>
  );
}
