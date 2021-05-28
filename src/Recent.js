import React, { useEffect, useState } from 'react';
import ContentContainer from './ContentContainer';
import ArtistsImage from './images/recently-played-image.jpg';
import usePersistedState from './usePersistedState'
import hash from './hash';
const axios = require('axios');

export default function Recent() {
  const [token, setToken] = usePersistedState();
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
      let weekday =new Array(7);
      weekday[0]="Sunday";
      weekday[1]="Monday";
      weekday[2]="Tuesday";
      weekday[3]="Wednesday";
      weekday[4]="Thursday";
      weekday[5]="Friday";
      weekday[6]="Saturday";
      let todayMonth = new Date().getMonth();
      let todayDate = new Date().getDate();
      let date = new Date(item.played_at);
      let day = (date.getDate() === todayDate && date.getMonth() === todayMonth) ? 'Today' : weekday[date.getDay()];
      let hours = date.getHours().toString();
      if (hours.length === 1) {
        hours = '0' + hours;
      }

      let minutes = date.getMinutes().toString();
      if (minutes.length === 1) {
        minutes = '0' + minutes;
      }
      trackObj['timeStamp'] = day + ' @ ' + hours + ':' + minutes;
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
      type="recent"
    />
  );
}
