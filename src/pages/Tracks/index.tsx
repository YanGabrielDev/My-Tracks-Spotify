import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

function Tracks() {
  const [accessToken, setAccessToken] = useState("");
  const [artists, setArtists] = useState([]);
  const spotifyApi = new SpotifyWebApi();

  const getTopArtists = () => {
    spotifyApi.getMyTopTracks()
      .then((response: any) => {
        setArtists(response.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('access_token');
    if (accessToken) {
      setAccessToken(accessToken);
      spotifyApi.setAccessToken(accessToken);
      getTopArtists();
    }
  }, []);

  return (
    <div className="px-12 bg-zinc-950 text-white h-full">
      <div className="w-full flex justify-center pt-8">
      <h1 className="text-4xl">Your Top Spotify tracks</h1>
      </div>
      <div className="w-full flex justify-center pt-8">
      <span className="">weekend</span>
      <span className="">mouth</span>
      <span className="">all time</span>
      </div>

        <div className="grid semi-md:grid-cols-3 sm:grid-cols-2 gap-6 mt-8">

        {artists.map((artist: any, index) => (
          <div  key={artist.id} className="flex items-center">
            <span className="text-4xl w-10">{index + 1}</span>
            <img className="h-24 ml-4 mr-4" alt={artist.name} src={artist.album.images[1].url}/>
            <div className="flex flex-col semi-md:max-w-[12rem] break-words sm:max-w-[12rem]">
            <span>{artist.name}</span>
            <span>{artist.artists[0].name}</span>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}

export default Tracks;