import { useState } from "react";
import MusicCard from "./MusicCards";
import cardData from "../assets/cardData";

const Soundcards = ({ playingIds, setPlayingIds }) => {
  return (
    <div className="w-fit mx-auto grid gap-x-14 gap-y-20 mt-10 mb-5
            grid-cols-2    <!-- default: XS -->
            sm:grid-cols-2 <!-- small -->
            md:grid-cols-2 <!-- medium -->
            lg:grid-cols-4 <!-- large -->
            xl:grid-cols-4 <!-- extra-large -->">
      {cardData.map((card) => (
        <MusicCard
          key={card.id}
          {...card}
          playingIds={playingIds}
          setPlayingIds={setPlayingIds}
        />
      ))}
    </div>
  );
};

export default Soundcards;