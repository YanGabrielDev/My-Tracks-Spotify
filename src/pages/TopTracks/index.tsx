import { CardTracks } from "@/components/CardTracks";
import { Footer } from "@/components/Footer";
import { Loader } from "@/icons/Loader";
import { Tracks } from "@/interfaces/Tracks";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

function TopTracks() {
  const [tracks, setTracks] = useState<Array<Tracks>>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const spotifyApi = new SpotifyWebApi();
  const [typeTime, setTypeTime] = useState<string>("");
  //Chama a request tracks
  const getTopTracks = (
    time_range: "long_term" | "short_term" | "medium_term"
  ) => {
    setTypeTime(time_range);
    spotifyApi
      .getMyTopTracks({ time_range: time_range })
      .then((response: any) => {
        setTracks(response.items);
        setIsloading(false);
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
      getTopTracks("long_term");
    }
  }, []);

  return (
    <>
      <div className="px-5 xs:px-10 text-white h-full">
        <div className="w-full flex justify-center pt-8">
          <h1 className="text-[20px] xs:text-4xl">Your Top Spotify tracks</h1>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="w-full flex justify-center pt-8">
              <span
                className={`px-4 ${typeTime === "long_term" && "selectedTime"}`}
                onClick={() => getTopTracks("long_term")}
              >
                All time
              </span>
              <span
                className={`px-4 ${
                  typeTime === "short_term" && "selectedTime"
                }`}
                onClick={() => getTopTracks("short_term")}
              >
                Weekend
              </span>
              <span
                className={`px-4 ${
                  typeTime === "medium_term" && "selectedTime"
                }`}
                onClick={() => getTopTracks("medium_term")}
              >
                Mouth
              </span>
            </div>
            <div className="grid semi-md:grid-cols-3 sm:grid-cols-2 gap-6 my-8">
              {tracks.map((tracks: Tracks, index) => (
                <>
                  <CardTracks
                    id={tracks.id}
                    artistName={tracks.artists[0].name}
                    trackName={tracks.name}
                    positionTrack={index}
                    trackImage={tracks.album.images[0].url}
                    key={tracks.id}
                  />
                </>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default TopTracks;
