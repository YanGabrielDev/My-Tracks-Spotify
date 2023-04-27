import Image from 'next/image'
import { Inter } from 'next/font/google'
import SpotifyWebApi from 'spotify-web-api-js'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })
const spotifyApi = new SpotifyWebApi();

export default function Home() {
  const router = useRouter()


  useEffect(() => {
    const params = window.location.hash;

    if (params) {
      router.push({pathname: "/Tracks", query: window.location.hash.substring(1)})
    }
  }, []);


  function handleLogin() {
    const client_id =  process.env.NEXT_PUBLIC_CIENT_ID;
    const redirect_uri = 'http://localhost:3002';
    const scope = 'user-read-private user-read-email user-read-recently-played';

    window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
  }

  return (
    <div>
        <button onClick={handleLogin}>Login com Spotify</button>
    </div>
  );
}