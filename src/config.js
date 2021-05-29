export const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = '884c025a2da34bc8bce1bfdf7ed93842';
// export const redirectUri = 'http://localhost:3000/home/top-tracks';
export const redirectUri = 'https://spoootify.netlify.app/home/top-tracks';
export const scopes = [
  'user-top-read',
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-read-recently-played',
];
