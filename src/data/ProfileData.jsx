import Lion from '../assets/lion1.jpg';

const ProfileData = [
  {
    name: 'User 1',
    img: Lion,
    id: 1,
    description: 'This is user 1 testing',
    games: [
      { title: 'Fortnite', hoursPlayed: '356 Hours' },
      { title: 'Halo 3', hoursPlayed: '856 Hours' },
      { title: 'CoD', hoursPlayed: '492' },
    ],
    status: 'online',
    isFriend: true,
  },
  {
    name: 'User 2',
    img: Lion,
    id: 2,
    description: 'This is user 2 testing',
    status: 'offline',
    offline: 'User has been offline for 9 hours',
    isFriend: false,
  },
  {
    name: 'User 3',
    img: Lion,
    id: 3,
    description: 'This is user 3 testing',
    status: 'offline',
    isFriend: false,
  },
  {
    name: 'User 4',
    img: Lion,
    id: 4,
    description: 'This is user 3 testing',
    status: 'offline',
    isFriend: false,
  },
  {
    name: 'User 5',
    img: Lion,
    id: 5,
    description: 'This is user 3 testing',
    status: 'offline',
    isFriend: true,
  },
  {
    name: 'User 6',
    img: Lion,
    id: 6,
    description: 'This is user 3 testing',
    status: 'online',
    isFriend: false,
  },
  {
    name: 'User 7',
    img: Lion,
    id: 7,
    description: 'This is user 3 testing',
    status: 'offline',
    isFriend: true,
  },
  {
    name: 'User 8',
    img: Lion,
    id: 8,
    description: 'This is user 3 testing',
    status: 'online',
    isFriend: true,
  },
  {
    name: 'User 9',
    img: Lion,
    id: 9,
    description: 'This is user 3 testing',
    status: 'online',
    isFriend: false,
  },
];

export default ProfileData;
