import React, { useEffect, useState } from 'react';
import ArtistsImage from './images/top-artists-image.jpg'
import ContentContainer from './ContentContainer';
import hash from './hash';
const axios = require('axios');


export default function Artists() {
  const [token, setToken] = useState('');
  const [topArtists, setTopArtists] = useState([]);

  const parsetopArtists = (artists) => {
    let artistsArray = [];
    for (let item of artists.items) {
      let artistObj = {};
      artistObj['link'] = item.external_urls.spotify;
      artistObj['artistName'] = item.name;
      artistObj['genres'] = item.genres[0] + ', ' + item.genres[1] + ', ' + item.genres[2];
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
    if (token !== '') {
      let config = {
        headers: { Authorization: 'Bearer ' + token },
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
    }
  };

  useEffect(() => {
    let _token = hash.access_token;
    setToken(_token);
    getTopArtists('long_term');
  }, [token]);
  return <ContentContainer header="Top Artists" data={topArtists} fetchRequest={getTopArtists} image={ArtistsImage} />;
}
