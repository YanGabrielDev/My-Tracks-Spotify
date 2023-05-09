import { TopFiveTracks } from "@/components/TopFiveTracks";
import { Footer } from "@/components/Footer";
import { Loader } from "@/icons/Loader";
import { useState, useEffect, useRef } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import * as htmlToImage from 'html-to-image';
import SpotifyIcon from "@/icons/SpotifyIcon";


type TimeRange = "long_term" | "short_term" | "medium_term"

function TopTracks() {
  const domEl = useRef<HTMLDivElement>(null);
  const [tracks, setTracks] = useState<SpotifyApi.TrackObjectFull[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [typeTime, setTypeTime] = useState<TimeRange>("long_term");
  const [limitTracks, setLimitTracks] = useState<number>(5)

  const spotifyApi = new SpotifyWebApi();

  const handleCapture = async () => {
    if (domEl.current) {
      const dataUrl = await htmlToImage.toPng(domEl.current);

      // download image
      const link = document.createElement("a");
      link.download = "html-to-img.png";
      link.href = dataUrl;
      link.click();
    }
  }
  const showTypeTime = (): string => {
    switch(typeTime) {
      case "long_term":
        return "All Time";
      case "short_term":
        return "Weekend";
      case "medium_term":
        return "Mouth";
      default:
        return "";
    }
  };

  //Chama a request tracks
  const getTopTracks = (
    timeRange: TimeRange, limit: number
  ) => {
    setTypeTime;
    spotifyApi
      .getMyTopTracks({ time_range: timeRange, limit: limit })
      .then((response) => {
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
      getTopTracks("long_term", limitTracks);
    }
  }, []);

  const getTopTracksOfLimit = (newLimit: number) => {
    setLimitTracks(newLimit)
    getTopTracks(typeTime, newLimit)
  }

  const getTopTracksOfTimeRange = (newTimeRange: TimeRange) => {
    setTypeTime(newTimeRange)
    getTopTracks(newTimeRange, limitTracks)
  }

  return (
    <>
      <div className="xs:px-[400px] text-white h-full">
        <div className="w-full flex justify-center pt-5">
          <h1 className="text-[20px] xs:text-4xl">Your Top Spotify tracks</h1>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="w-full flex justify-center pt-8">
              <span
                className={`px-4 ${limitTracks === 5 && "selectedTime"}`}
                onClick={() => getTopTracksOfLimit(5)}
              >
                Top 5
              </span>
              <span
                className={`px-4 ${
                  limitTracks === 10 &&  "selectedTime"
                }`}
                onClick={() => getTopTracksOfLimit(10)}
              >
                Top 10
              </span>
            </div>
            <div className="w-full flex justify-center pt-8 mb-12">
              <span
                className={`px-4 ${typeTime === "long_term" && "selectedTime"}`}
                onClick={() => getTopTracksOfTimeRange("long_term")}
              >
                All time
              </span>
              <span
                className={`px-4 ${
                  typeTime === "short_term" && "selectedTime"
                }`}
                onClick={() => getTopTracksOfTimeRange("short_term")}
              >
                Weekend
              </span>
              <span
                className={`px-4 ${
                  typeTime === "medium_term" && "selectedTime"
                }`}
                onClick={() => getTopTracksOfTimeRange("medium_term")}
              >
                Mouth
              </span>
            </div>
            <div className="flex flex-col bg-black p-5" ref={domEl}>
              <div className="w-full flex justify-center text-2xl">
              <h3 className="mb-4"> My Top {showTypeTime()} Tracks</h3>
              </div>
              {tracks.map((tracks, index) => (
                <>
                  <TopFiveTracks
                    id={tracks.id}
                    artistName={tracks.artists[0].name}
                    trackName={tracks.name}
                    positionTrack={index}
                    trackImage={tracks.album.images[0].url}
                    key={tracks.id}
                  />
                </>
              ))}
              <div className="w-full flex justify-center text-2xl">
              <SpotifyIcon width="35" height="35" fill="#fff" />
              <span className="ml-2">
              Spotify
                </span>
              </div>
            </div>
            <div className="w-full flex justify-center">
               <button onClick={handleCapture} className="text-white px-4 rounded-md bg-blue-600">Download</button>     
              </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default TopTracks;