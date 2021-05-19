import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import hash from './hash';
const axios = require('axios');

export default function Home() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getUserPlaylists = async () => {
      // dont call api until token is set
      if (token !== '') {
        console.log(token);
        let config = {
          headers: { Authorization: 'Bearer ' + token },
          params: {
            limit: 10,
            offset: 0,
          },
        };

        let res = await axios.get(
          'https://api.spotify.com/v1/me/playlists',
          config
        );
        console.log(res);
      }
    };

    let _token = hash.access_token;
    setToken(_token);
    getUserPlaylists();
  }, [token]);

  return (
    <div>
      <h1>Home</h1>
      <Button
        onClick={() => {
          console.log(token);
        }}
      >
        HELLO
      </Button>
    </div>
  );
}
