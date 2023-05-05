import { CardTracks } from "@/components/CardTracks";
import { Loader } from "@/icons/Loader";
import { Tracks } from "@/interfaces/Tracks";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

function TopTracks() {
  const [tracks, setTracks] = useState<Array<Tracks>>([]);
  const [isLoading, setIsloading] = useState<boolean>(true)
  const spotifyApi = new SpotifyWebApi();

  //Chama a request tracks
  const getTopTracks = () => {
    spotifyApi
      .getMyTopTracks()
      .then((response: any) => {
        setTracks(response.items);
        setIsloading(false)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Obtem o token na url e chama a request
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");
    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
      getTopTracks();
    }
  }, []);

  return (
    <div className="px-10 bg-zinc-950 text-white h-full">
      <div className="w-full flex justify-center pt-8">
        <h1 className="text-4xl">Your Top Spotify tracks</h1>
      </div>
      {isLoading ? <Loader/> : (
        <>
      <div className="w-full flex justify-center pt-8">
        <span className="">weekend</span>
        <span className="">mouth</span>
        <span className="">all time</span>
      </div>
      <div className="grid semi-md:grid-cols-3 sm:grid-cols-2 gap-6 mt-8">
        {tracks.map((tracks: Tracks, index) => (
          <CardTracks
            id={tracks.id}
            artistName={tracks.artists[0].name}
            trackName={tracks.name}
            positionTrack={index}
            trackImage={tracks.album.images[0].url}
            key={tracks.id}
          />
        ))}
      </div>
      </>
      )}
    </div>
  );
}

export default TopTracks;
