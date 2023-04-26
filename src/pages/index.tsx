import Image from 'next/image'
import { Inter } from 'next/font/google'
import SpotifyWebApi from 'spotify-web-api-js'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
const spotifyApi = new SpotifyWebApi();

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [artists, setArtists] = useState([]);


  function getRecentlyPlayedArtists() {
    spotifyApi.getMyRecentlyPlayedTracks().then(response => {
       console.log(response);
    });
  }

  useEffect(() => {
    const params = getHashParams();
    const accessToken = params.access_token;

    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
      getRecentlyPlayedArtists()
      setLoggedIn(true);
    }
  }, []);

  function getHashParams() {
    const hashParams: any = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        console.log(hashParams)
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  function handleLogin() {
    const client_id =  process.env.NEXT_PUBLIC_CIENT_ID;
    const redirect_uri = 'http://localhost:3000';
    const scope = 'user-read-private user-read-email user-read-recently-played';

    window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
  }

  return (
    <div>
      {!loggedIn ? (
        <button onClick={handleLogin}>Login com Spotify</button>
      ) : (
        <h1>Spotify On!</h1>
      )}
    </div>
  );
}
