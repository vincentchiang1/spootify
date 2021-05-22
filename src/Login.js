import { Button } from '@material-ui/core';
import React from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from './config';
import './login.css';
export default function Login() {
  return (
    <div className="login-container">
      <div className="login-content">
        <span className="login-title">Replay your Spootify Hits</span>
        <a
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            '%20'
          )}&response_type=token&show_dialog=true`}
        >
          <button className="btn">Connect with Spootify</button>
        </a>
      </div>
    </div>
  );
}
