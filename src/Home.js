import React, { useEffect, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import hash from './hash';
import './Home.css';
const axios = require('axios');

export default function Home() {
  const [token, setToken] = useState('');
  const [topTracks, setTopTracks] = useState([]);

  const parsetopTracks = (tracks) => {
    console.log(tracks);
    let tracksArray = [];
    for (let item of tracks.items) {
      let trackObj = {};
      trackObj['songName'] = item.name;
      trackObj['artistName'] = item.artists[0].name;
      trackObj['songLink'] = item.external_urls.spotify;
      let imageObj = {};
      imageObj['largeImg'] = item.album.images[0];
      imageObj['mediumImg'] = item.album.images[1];
      imageObj['smallImg'] = item.album.images[2];
      trackObj['images'] = imageObj;
      tracksArray.push(trackObj);
    }
    setTopTracks(tracksArray);
    console.log(tracksArray);
  };

  useEffect(() => {
    const getUserPlaylists = async () => {
      // dont call api until token is set
      if (token !== '') {
        console.log(token);
        let config = {
          headers: { Authorization: 'Bearer ' + token },
          params: {
            time_range: 'long_term',
            limit: 10,
          },
        };

        let res = await axios.get(
          '	https://api.spotify.com/v1/me/top/tracks',
          config
        );
        if (res.data) {
          parsetopTracks(res.data);
        }
      }
    };

    let _token = hash.access_token;
    setToken(_token);
    getUserPlaylists();
  }, [token]);

  return (
    <div className="home-page">
      <h1>Top Tracks</h1>
      <Tabs indicatorColor="primary">
        <Tab label="All Time" />
        <Tab label="Recent" />
        <Tab label="Past 6 Months" />
      </Tabs>
      <div className="top-track-list">
        {topTracks.map((track, index) => {
          return (
            <a
              target="_blank"
              href={track.songLink}
              key={index}
              className="track-container"
            >
              <div className="track-index-container">
                <span>{index + 1}</span>
              </div>
              <img
                className="image-container"
                src={track.images.smallImg.url}
                alt="track icon"
              />
              <div className="name-container">
                <span className="songName">{track.songName}</span>
                <span className="artistName">{track.artistName}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
