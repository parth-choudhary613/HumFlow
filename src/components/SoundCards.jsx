// Soundcards.jsx
import { useState } from "react";
import MusicCard from "./MusicCards";
import cardData from "../assets/cardData";

const Soundcards = () => {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);

  return (
    <div className="flex flex-wrap justify-center gap-4 lg:gap-6 p-4">
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
