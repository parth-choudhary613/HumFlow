// assets/cardData.js

const cardData = [
  {
    id: 1,
    audioSrc: () => import(`${import.meta.env.BASE_URL}assets/audio1.mp3`),
    videoSrc: `${import.meta.env.BASE_URL}assets/rain.mp4`,
    thumbnail: `${import.meta.env.BASE_URL}assets/cloud.png`,
    title: "Rain Beat",
  },
  {
    id: 2,
    audioSrc: () => import(`${import.meta.env.BASE_URL}assets/audio2.mp3`),
    videoSrc: `${import.meta.env.BASE_URL}assets/thunder.mp4`,
    thumbnail: `${import.meta.env.BASE_URL}assets/thundercloud.png`,
    title: "Thunderstorm Vibes",
  },
  {
    id: 3,
    audioSrc: () => import(`${import.meta.env.BASE_URL}assets/audio3.mp3`),
    videoSrc: `${import.meta.env.BASE_URL}assets/wind.mp4`,
    thumbnail: `${import.meta.env.BASE_URL}assets/windimage.png`,
    title: "Windy Day",
  },
  {
    id: 4,
    audioSrc: () => import(`${import.meta.env.BASE_URL}assets/audio4.mp3`),
    videoSrc: `${import.meta.env.BASE_URL}assets/birds.mp4`,
    thumbnail: `${import.meta.env.BASE_URL}assets/Birds.png`,
    title: "Chirping Birds",
  },
  {
    id: 5,
    audioSrc: () => import(`${import.meta.env.BASE_URL}assets/audio5.mp3`),
    videoSrc: `${import.meta.env.BASE_URL}assets/frogs.mp4`,
    thumbnail: `${import.meta.env.BASE_URL}assets/frog.png`,
    title: "Frogs Croaking",
  },
  {
    id: 6,
    audioSrc: () => import(`${import.meta.env.BASE_URL}assets/audio6.mp3`),
    videoSrc: `${import.meta.env.BASE_URL}assets/insects.mp4`,
    thumbnail: `${import.meta.env.BASE_URL}assets/insect.png`,
    title: "Insect Sounds",
  },
  {
    id: 7,
    audioSrc: () => import(`${import.meta.env.BASE_URL}assets/audio7.mp3`),
    videoSrc: `${import.meta.env.BASE_URL}assets/waterfall.mp4`,
    thumbnail: `${import.meta.env.BASE_URL}assets/waterfall.png`,
    title: "Waterfall",
  },
  {
    id: 8,
    audioSrc: () => import(`${import.meta.env.BASE_URL}assets/audio8.mp3`),
    videoSrc: `${import.meta.env.BASE_URL}assets/windchimes.mp4`,
    thumbnail: `${import.meta.env.BASE_URL}assets/windchimes.png`,
    title: "Wind Chimes",
  },
];

export default cardData;
