import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import TopTracks from './TopTracks';
import Routes from './Routes';

export default function Home() {
  return (
    <div className="home-page">
      <Sidebar />
      <TopTracks />
      {/* <Routes /> */}
    </div>
  );
}
