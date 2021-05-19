import { Button } from '@material-ui/core';
import React from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from './config';

export default function Login() {
  return (
    <div>
      <h1>Spootify</h1>
      <a
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          '%20'
        )}&response_type=token&show_dialog=true`}
      >
        <Button variant="contained" color="primary">
          CONNECT WITH SPOOTIFY
        </Button>
      </a>
    </div>
  );
}
