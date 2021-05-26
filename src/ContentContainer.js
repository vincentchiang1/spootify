import React, { useEffect, useState } from 'react';
import hash from './hash';
const axios = require('axios');

export default function ContentContainer(props) {
  const [token, setToken] = useState('');
  const [topTracks, setTopTracks] = useState([]);

  const parsetopTracks = (tracks) => {
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
  };

  const getUserPlaylists = async (timeRange) => {
    // dont call api until token is set
    if (token !== '') {
      let config = {
        headers: { Authorization: 'Bearer ' + token },
        params: {
          time_range: timeRange,
          limit: 10,
        },
      };

      let res = await axios.get(
        'https://api.spotify.com/v1/me/top/tracks',
        config
      );
      if (res.data) {
        parsetopTracks(res.data);
      }
    }
  };

  useEffect(() => {
    let _token = hash.access_token;
    setToken(_token);
    getUserPlaylists('long_term');
  }, [token]);
  return (
    <div className="content-container">
      <div
        style={{ backgroundImage: `url(${props.tracksImage})` }}
        className="cover-photo"
      ></div>
      <h1 className="header-container">{props.header}</h1>
      <div className="top-track-list">
        <div className="time-range-selector">
          <button
            className="time-option"
            id="long_term"
            onClick={() => getUserPlaylists('long_term')}
          >
            All Time
          </button>
          <button
            className="time-option"
            id="medium_term"
            onClick={() => getUserPlaylists('medium_term')}
          >
            Past 6 Months
          </button>
          <button
            className="time-option"
            id="short_term"
            onClick={() => getUserPlaylists('short_term')}
          >
            Last Month
          </button>
        </div>
        {topTracks.map((track, index) => {
          return (
            <a
              target="_blank"
              href={track.songLink}
              key={index}
              className="track-container"
              rel="noreferrer"
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
