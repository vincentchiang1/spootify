import React, { useEffect, useState } from 'react';
import ContentContainer from './ContentContainer';
import ArtistsImage from './images/recently-played-image.jpg';
import hash from './hash';
const axios = require('axios');

export default function Recent() {
  const [token, setToken] = useState('');
  const [recentSongs, setrecentSongs] = useState([]);

  const parseRecentSongs = (tracks) => {
    let tracksArray = [];
    for (let item of tracks.items) {
      let trackObj = {};
      trackObj['songName'] = item.track.name;
      trackObj['artistName'] = item.track.artists[0].name;
      trackObj['link'] = item.track.external_urls.spotify;
      let imageObj = {};
      imageObj['largeImg'] = item.track.album.images[0];
      imageObj['mediumImg'] = item.track.album.images[1];
      imageObj['smallImg'] = item.track.album.images[2];
      trackObj['images'] = imageObj;
      trackObj['timeStamp'] = item.played_at;
      tracksArray.push(trackObj);
    }
    setrecentSongs(tracksArray);
  };

  const getRecentSongs = async () => {
    // dont call api until token is set
    if (token !== '') {
      let config = {
        headers: { Authorization: 'Bearer ' + token },
        params: {
          limit: 10,
        },
      };

      let res = await axios.get(
        'https://api.spotify.com/v1/me/player/recently-played',
        config
      );
      if (res.data) {
        parseRecentSongs(res.data);
      }
    }
  };

  useEffect(() => {
    let _token = hash.access_token;
    setToken(_token);
    getRecentSongs();
  }, [token]);

  return (
    <ContentContainer
      header="Recently Played"
      image={ArtistsImage}
      data={recentSongs}
      fetchRequest={getRecentSongs}
    />
  );
}
