import React, { useEffect, useState } from 'react';
import hash from './hash';
const SPOTIFY_SESSION_KEY = 'spotify-session-key';

export default function usePersistedState() {
  const [sessionKey, setSessionKey] = useState(localStorage.getItem(SPOTIFY_SESSION_KEY));

  const persistentSetState = (param) => {
    localStorage.setItem(SPOTIFY_SESSION_KEY, param);
  }
  
  useEffect(() => {
    console.log(sessionKey)
    if (sessionKey === '' || sessionKey === 'undefined') {
      let _token = hash.access_token;
      persistentSetState(_token);
      console.log(sessionKey)
      console.log(localStorage.getItem(SPOTIFY_SESSION_KEY))
    }
  }, []);

  return [sessionKey, persistentSetState];
}