import GameHeroCard from '../components/GameHeroCard';

import '../App.css';

function GameHero({ GameData }) {
  return (
    <div className="GameHeroContainer">
      GameHero
      <GameHeroCard GameData={GameData} />
    </div>
  );
}

export default GameHero;
