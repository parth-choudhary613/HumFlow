// src/assets/moreData.js

export const moreData = [
  {
    id: 1,
    title: 'Pebble Falling',
    audio: () => import(`${import.meta.env.BASE_URL}assets/moresounds1.mp3`),
    thumbnail: `${import.meta.env.BASE_URL}assets/FallingStone.png`
  },
  {
    id: 2,
    title: 'Water Bubbles',
    audio: () => import(`${import.meta.env.BASE_URL}assets/moresounds2.mp3`),
    thumbnail: `${import.meta.env.BASE_URL}assets/WaterBubbles.png`
  },
  {
    id: 3,
    title: 'Water Walk',
    audio: () => import(`${import.meta.env.BASE_URL}assets/moresounds3.mp3`),
    thumbnail: `${import.meta.env.BASE_URL}assets/WaterWalk.png`
  },
  {
    id: 4,
    title: 'Bee Buzzing',
    audio: () => import(`${import.meta.env.BASE_URL}assets/moresounds4.mp3`),
    thumbnail: `${import.meta.env.BASE_URL}assets/BeeBuzzing.png`
  },
  {
    id: 5,
    title: 'Fire Crackling',
    audio: () => import(`${import.meta.env.BASE_URL}assets/moresounds5.mp3`),
    thumbnail: `${import.meta.env.BASE_URL}assets/FireCrackling.png`
  },
  {
    id: 6,
    title: 'Rain Drum',
    audio: () => import(`${import.meta.env.BASE_URL}assets/moresounds6.mp3`),
    thumbnail: `${import.meta.env.BASE_URL}assets/RainDrum.png`
  },
];
