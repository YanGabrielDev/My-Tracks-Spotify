import { useRouter } from "next/router";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

function Tracks(){
  const spotifyApi = new SpotifyWebApi();
  const router = useRouter()
  function getRecentlyPlayedArtists() {
    spotifyApi.getMyRecentlyPlayedTracks().then(response => {
    });
  }

  useEffect(() =>{
  const accessToken = `${router.query.access_token}`
  if(accessToken){
    spotifyApi.setAccessToken(accessToken)
    getRecentlyPlayedArtists()
  }
  },[])
  
  return(
    <h1>asasfasf</h1>
  )
}
export default Tracks;