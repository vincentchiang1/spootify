import React, { useEffect, useState } from 'react';
import ContentContainer from './ContentContainer';
import TracksImage from './images/top-tracks-image.webp';
const axios = require('axios');

export default function TopTracks(props) {
  const [topTracks, setTopTracks] = useState([]);

  const parsetopTracks = (tracks) => {
    let tracksArray = [];
    for (let item of tracks.items) {
      let trackObj = {};
      trackObj['songName'] = item.name;
      trackObj['artistName'] = item.artists[0].name;
      trackObj['link'] = item.external_urls.spotify;
      let imageObj = {};
      imageObj['largeImg'] = item.album.images[0];
      imageObj['mediumImg'] = item.album.images[1];
      imageObj['smallImg'] = item.album.images[2];
      trackObj['images'] = imageObj;
      tracksArray.push(trackObj);
    }
    setTopTracks(tracksArray);
  };

  const getTopTracks = async (timeRange) => {
    // dont call api until token is set
    let config = {
      headers: { Authorization: 'Bearer ' + props.token },
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
  };

  useEffect(() => {
    getTopTracks('long_term');
  }, [props.token]); // recall this when token is updated

  return (
    <ContentContainer
      header="Top Tracks"
      image={TracksImage}
      data={topTracks}
      fetchRequest={getTopTracks}
      type="tracks"
    />
  );
}
