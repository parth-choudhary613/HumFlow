// Soundcards.jsx
import { useState } from "react";
import MusicCard from "./MusicCards";
import cardData from "../assets/cardData";

const Soundcards = () => {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);

  return (
    <div className="grid grid-rows-4 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-center gap-y-4 p-4 ml-6">
      {cardData.map((card) => (
        <MusicCard
          key={card.id}
          {...card}
          currentlyPlayingId={currentlyPlayingId}
          setCurrentlyPlayingId={setCurrentlyPlayingId}
        />
      ))}
  
    </div>
  );
};

export default Soundcards;
