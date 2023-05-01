import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import SpotifyIcon from "@/icons/SpotifyIcon";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const params = window.location.hash;

    if (params) {
      router.push({
        pathname: "/Tracks",
        query: window.location.hash.substring(1),
      });
    }
  }, []);

  function handleLogin() {
    const client_id = process.env.NEXT_PUBLIC_CIENT_ID;
    const redirect_uri = "http://localhost:3000";
    const scope = "user-top-read"
    window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
  }

  return (
    <div className="h-screen w-full bg-no-repeat bg-center bg-cover bg-[url('/images/photo.avif')]">
      <div className="absolute h-screen w-full backdrop-brightness-50">
        <motion.div
          className="mt-20 w-full px-12 flex items-center flex-col 
        sm:px-18 md:px-46 lg:px-80"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`${poppins.className} text-white fold:text-2xl 
          xs:text-4xl sm:text-6xl`}
          >
            Your Spotify Tracks
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full px-12 flex items-center 
          flex-col sm:px-18 md:px-56"
        >
          <div className="text-white text-center mt-10 fold:text-sm xs:text-md sm:text-[16px] max-w-md">
            <h2>
              Você é um amante da música e adora acompanhar as suas playlists e
              artistas favoritos no Spotify?
            </h2>
            <h3 className="text-white mt-6">
              Então não perca mais tempo! Faça login agora no nosso site e
              descubra os seus status recentes no Spotify.{" "}
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full mt-10 flex items-center justify-center"
        >
          <Button
            text="Conectar-se"
            onClick={() => handleLogin()}
            icon={<SpotifyIcon width="25" height="25" fill="#000" />}
          />
        </motion.div>
      </div>
    </div>
  );
}
