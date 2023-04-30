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
    <div>
      <h1>My Top Artists</h1>
      <ul>
        {artists.map((artist: any) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tracks;