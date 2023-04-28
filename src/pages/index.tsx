import Image from 'next/image'
import { Poppins } from 'next/font/google'
import SpotifyWebApi from 'spotify-web-api-js'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import wallpaper from '../assets/images/wallpaper.webp'

const poppins = Poppins({ subsets: ['latin'],
weight: "600"
})
const spotifyApi = new SpotifyWebApi();

export default function Home() {
  const imageUrl = '../assets/images/image.jpg';

  const router = useRouter()


  useEffect(() => {
    const params = window.location.hash;

    if (params) {
      router.push({pathname: "/Tracks", query: window.location.hash.substring(1)})
    }
  }, []);


  function handleLogin() {
    const client_id =  process.env.NEXT_PUBLIC_CIENT_ID;
    const redirect_uri = 'http://localhost:3000';
    const scope = 'user-read-private user-read-email user-read-recently-played';

    window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
  }

  return (
    <div className="h-screen w-full bg-no-repeat bg-center bg-cover bg-gradient-to-b from-transparent to-black to-70% relative" style={{ backgroundImage: "url('/images/background.jpg')" }}>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black to-90%"></div>
  {/* Conteúdo do componente */}
  <button onClick={handleLogin}>Login com Spotify</button>
</div>
  );
}