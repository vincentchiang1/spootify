import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import hash from './hash';

export default function Home() {
  const [token, setToken] = useState('');

  useEffect(() => {
    let _token = hash.access_token;
    setToken(_token);
  }, []);

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
