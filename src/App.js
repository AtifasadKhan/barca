import logo from './logo.svg';
import './App.css';
import Players from './components/outputs/Players';
import NewPlayer from './components/inputs/NewPlayer';
import { useState } from 'react';
const playerStats = [
  {
    id: 14,
    playerName: 'Neymar',
    position: 'LW',
  },
  {
    id: 13,
    playerName: 'Depay',
    position: 'ST',
  },
  {
    id: 12,
    playerName: 'Ansu',
    position: 'LW',
  },
  {
    id: 11,
    playerName: 'Dembele',
    position: 'RW',
  },
  {
    id: 10,
    playerName: 'Messi',
    position: 'RW',
  },
  {
    id: 9,
    playerName: 'Lewendoski',
    position: 'ST',
  },
  {
    id: 8,
    playerName: 'Pedri',
    position: 'AMF',
  },
  {
    id: 7,
    playerName: 'Frankie',
    position: 'CM',
  },
  {
    id: 6,
    playerName: 'Kessie',
    position: 'CB',
  },
  {
    id: 5,
    playerName: 'Arujo',
    position: 'CB',
  },
  {
    id: 4,
    playerName: 'Kounde',
    position: 'CB',
  },
  {
    id: 3,
    playerName: 'Alonso',
    position: 'RB',
  },
  {
    id: 2,
    playerName: 'Alba',
    position: 'LB',
  },
  {
    id: 1,
    playerName: 'Ter Stegen',
    position: 'GK',
  },
  {
    id: 0,
    playerName: 'Inaki Pena',
    position: 'GK',
  },
];

const App = () => {
  const [playerData, setPlayerData] = useState(playerStats);
  // console.log(playerData);
  // console.log('***************************');
  // console.log(...playerData);

  const addPlayerHandler = (dataFromNewPlayer) => {
    // console.log('Data from i/p' + dataFromNewPlayer);

    setPlayerData((data) => {
      return [dataFromNewPlayer, ...data];
    });

    // console.log(playerData);
    // setPlayerData([dataFromNewPlayer, ...playerData]);
  };
  return (
    <div>
      <NewPlayer onAddPlayer={addPlayerHandler} />
      {/* previously we were sending PlayerStats ie the main array above but now
      we are sending playerData which is combination of
      new i/p and old data */}
      <Players stats={playerData} />
    </div>
  );
};

export default App;
