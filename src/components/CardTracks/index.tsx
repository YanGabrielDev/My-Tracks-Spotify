export interface CardTracks {
  id: string;
  positionTrack: number;
  trackName: string;
  trackImage: string;
  artistName: string;
}
export const CardTracks = ({
  artistName,
  id,
  positionTrack,
  trackImage,
  trackName,
}: CardTracks) => {
  return (
    <div key={id} className="flex items-center">
      <span className="text-4xl w-10">{positionTrack + 1}</span>
      <img className="h-24 ml-4 mr-4" alt={artistName} src={trackImage} />
      <div className="flex flex-col semi-md:max-w-[10rem] break-words sm:max-w-[10rem] w-full fold:max-w-[9rem]">
        <span>{trackName}</span>
        <span>{artistName}</span>
      </div>
    </div>
  );
};
