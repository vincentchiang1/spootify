import React, { useEffect, useState } from 'react';
import ArtistsImage from './images/top-artists-image.jpg';
import ContentContainer from './ContentContainer';
const axios = require('axios');

export default function Artists(props) {
  const [topArtists, setTopArtists] = useState([]);

  const parsetopArtists = (artists) => {
    let artistsArray = [];
    for (let item of artists.items) {
      let artistObj = {};
      artistObj['link'] = item.external_urls.spotify;
      artistObj['artistName'] = item.name;
      let numGenres = 0;
      artistObj['genres'] = '';
      for (let genre of item.genres) {
        if (numGenres > 2) {
          break;
        }
        numGenres === 2 || numGenres === item.genres.length - 1
          ? (artistObj['genres'] += genre)
          : (artistObj['genres'] += genre + ', ');
        numGenres++;
      }
      let imageObj = {};
      imageObj['largeImg'] = item.images[0];
      imageObj['mediumImg'] = item.images[1];
      imageObj['smallImg'] = item.images[2];
      artistObj['images'] = imageObj;
      artistsArray.push(artistObj);
    }
    setTopArtists(artistsArray);
  };

  const getTopArtists = async (timeRange) => {
    // dont call api until token is set
    let config = {
      headers: { Authorization: 'Bearer ' + props.token },
      params: {
        time_range: timeRange,
        limit: 10,
      },
    };

    let res = await axios.get(
      'https://api.spotify.com/v1/me/top/artists',
      config
    );
    if (res.data) {
      parsetopArtists(res.data);
    }
  };

  useEffect(() => {
    getTopArtists('long_term');
  }, []);
  return (
    <ContentContainer
      header="Top Artists"
      data={topArtists}
      fetchRequest={getTopArtists}
      image={ArtistsImage}
      type="artists"
    />
  );
}
