import React, { useEffect, useState } from 'react';
import ContentContainer from './ContentContainer';
import ArtistsImage from './images/recently-played-image.jpg';
const axios = require('axios');

export default function Recent(props) {
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
      let weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ];
      let todayMonth = new Date().getMonth();
      let todayDate = new Date().getDate();
      let date = new Date(item.played_at);
      let day =
        date.getDate() === todayDate && date.getMonth() === todayMonth
          ? 'Today'
          : weekday[date.getDay()];
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
    let config = {
      headers: { Authorization: 'Bearer ' + props.token },
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
  };

  useEffect(() => {
    getRecentSongs();
  }, []);

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
