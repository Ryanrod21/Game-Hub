import apex from '../assets/apex1.jpg';
import halo3 from '../assets/halo3.jpg';
import cod2 from '../assets/cod2.png';
import metalgear from '../assets/metalgear.jpg';
import gta5 from '../assets/gta5.png';
import marvelrivals from '../assets/marvelrivals.jpg';

const GameData = [
  {
    id: 1,
    title: 'Apex',
    type: 'Battle Royal',
    tag: 'Shooter',
    tag2: 'FPS',
    thebackground: {
      backgroundImage: `url(${apex})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  },
  {
    id: 2,
    title: 'Halo 3',
    type: 'Single and Multiplayer',
    tag: 'Shooter',
    tag2: 'FPS',
    thebackground: {
      backgroundImage: `url(${halo3})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  },
  {
    id: 3,
    title: 'Call of Duty Modern Warfare 2',
    type: 'Single and Multiplayer',
    tag: 'Shooter',
    tag2: 'FPS',
    thebackground: {
      backgroundImage: `url(${cod2})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  },
  {
    id: 4,
    title: 'Marvel Rivals',
    type: 'Multiplayer',
    tag: 'Shooter',
    tag2: 'FPS',
    thebackground: {
      backgroundImage: `url(${marvelrivals})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  },
  {
    id: 5,
    title: 'Grand Theft Auto 5',
    type: 'Story Driven',
    tag: 'Shooter',
    tag2: 'FPS',
    thebackground: {
      backgroundImage: `url(${gta5})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  },
  {
    id: 6,
    title: 'Metal Gear Solid 2: Sons of Liberty',
    type: 'Story Driven',
    tag: 'Shooter',
    tag2: 'FPS',
    thebackground: {
      backgroundImage: `url(${metalgear})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  },
];

export default GameData;
