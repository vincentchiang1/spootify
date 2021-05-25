import React from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from './config';
import ParticlesBg from 'particles-bg';

import Logo from './images/spootify-logo.png';
import './login.css';

export default function Login() {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 100],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: 'all',
    color: ['random', '#ff0000'],
    cross: 'dead',
    random: 15,
  };

  return (
    <div className="login-container">
      <img className="logo" src={Logo} alt="spootify" />
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

      <div className="particle">
        <ParticlesBg type="custom" config={config} bg={true} />
      </div>
    </div>
  );
}
